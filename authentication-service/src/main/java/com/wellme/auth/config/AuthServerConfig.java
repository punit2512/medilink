package com.wellme.auth.config;
import java.util.Properties;

import javax.inject.Inject;
import javax.inject.Named;
import javax.persistence.EntityManagerFactory;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;


@Configuration
@EnableTransactionManagement
//@EnableJpaRepositories(basePackages="com.wellme.appointment.repo" )
public class AuthServerConfig {
	@Bean
	public PasswordEncoder oauthClientPasswordEncoder() {
		return new BCryptPasswordEncoder(4);
	}

	@Bean
	public PasswordEncoder userPasswordEncoder() {
		return new BCryptPasswordEncoder(8);
	}

    
    @Bean
    @Inject
    public NamedParameterJdbcTemplate medilinkJDBCTemplate(
    		@Named("mediLinkMysqlAuthDataSource") DataSource mediLinkMysqlDataSource,
    		@Value("${medilink.mysql.db.fetchsize:1000}") int fetchSize){
    	NamedParameterJdbcTemplate jdbcTemplate = new NamedParameterJdbcTemplate(mediLinkMysqlDataSource);
    	((JdbcTemplate) jdbcTemplate.getJdbcOperations()).setFetchSize(fetchSize);
    	return jdbcTemplate;
    }
    
    @Bean
    public DataSource mediLinkMysqlAuthDataSource(
    		@Value("${mysql.db.driver:com.mysql.jdbc.Driver}") String driverClass,
    		@Value("${medilink.auth.db.url:undefined}") String dbUrl,
    		@Value("${medilink.auth.db.username:undefined}") String dbUser,
    		@Value("${medilink.auth.db.password:undefined}") String dbPassword){
    	HikariConfig config = new HikariConfig();
    	config.setDriverClassName(driverClass);
    	config.setJdbcUrl(dbUrl);
    	config.setUsername(dbUser);
    	config.setPassword(dbPassword);
    	config.setMaximumPoolSize(10);
    	config.setInitializationFailTimeout(0);
    	return new HikariDataSource(config);
    	
    }
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory(@Named("mediLinkMysqlAuthDataSource") DataSource mediLinkMysqlAuthDataSource) {
       LocalContainerEntityManagerFactoryBean em 
         = new LocalContainerEntityManagerFactoryBean();
       em.setDataSource(mediLinkMysqlAuthDataSource);
       em.setPackagesToScan(new String[] { "com.wellme.auth.security" });
       JpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
       em.setJpaVendorAdapter(vendorAdapter);
       em.setJpaProperties(additionalProperties());
  
       return em;
    }
    
    @Bean
    public PlatformTransactionManager transactionManager(
      EntityManagerFactory emf){
        JpaTransactionManager transactionManager = new JpaTransactionManager();
        transactionManager.setEntityManagerFactory(emf);
  
        return transactionManager;
    }
  
    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation(){
        return new PersistenceExceptionTranslationPostProcessor();
    }
  
    Properties additionalProperties() {
        Properties properties = new Properties();
        properties.setProperty("hibernate.hbm2ddl.auto", "create-drop");
        properties.setProperty(
          "hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
        properties.setProperty("hibernate.show_sql", "true"); 
        return properties;
    }

}
