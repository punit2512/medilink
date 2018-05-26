package com.wellme.appointment.config;
import javax.inject.Inject;
import javax.inject.Named;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoDbFactory;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.mongodb.MongoClient;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;


@Configuration
@EnableMongoRepositories(basePackages="com.wellme.appointment.repo" )
public class AppointmentConfig {
	
	@Bean
    public MongoDbFactory mongoDbFactory() throws Exception {
        MongoClient mongoClient = new MongoClient("localhost", 27017);
        return new SimpleMongoDbFactory(mongoClient, "wellme");
    }
 
    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        MongoTemplate mongoTemplate = new MongoTemplate(mongoDbFactory());
        return mongoTemplate;
    }
    
    @Bean
    @Inject
    public NamedParameterJdbcTemplate medilinkJDBCTemplate(
    		@Named("mediLinkMysqlDataSource") DataSource mediLinkMysqlDataSource,
    		@Value("${medilink.mysql.db.fetchsize:1000") int fetchSize){
    	NamedParameterJdbcTemplate jdbcTemplate = new NamedParameterJdbcTemplate(mediLinkMysqlDataSource);
    	((JdbcTemplate) jdbcTemplate.getJdbcOperations()).setFetchSize(fetchSize);
    	return jdbcTemplate;
    }
    
    @Bean
    public DataSource mediLinkMysqlDataSource(
    		@Value("${mysql.db.driver:com.mysql.jdbc.Driver") String driverClass,
    		@Value("${medilink.db.url:undefined}") String dbUrl,
    		@Value("${medilink.db.username:undefined}") String dbUser,
    		@Value("${medilink.db.password:undefined}") String dbPassword){
    	HikariConfig config = new HikariConfig();
    	config.setDriverClassName(driverClass);
    	config.setJdbcUrl(dbUrl);
    	config.setUsername(dbUser);
    	config.setPassword(dbPassword);
    	config.setMaximumPoolSize(10);
    	config.setInitializationFailTimeout(0);
    	return new HikariDataSource(config);
    	
    }

}
