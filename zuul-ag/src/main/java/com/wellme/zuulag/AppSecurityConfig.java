package com.wellme.zuulag;
import java.util.Arrays;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {

//	@Override
//  protected void configure(final HttpSecurity http) throws Exception {
//      // @formatter:off
//		http.authorizeRequests().antMatchers("/login","/signup").anonymous()
//		.antMatchers("/oauth/token/revokeById/**").permitAll()
//		 .antMatchers("/oauth**", "/", "/login**", "/search**", "*/signup**").permitAll()
//		.anyRequest().authenticated()
//		.and().formLogin().permitAll()
//		.and().csrf().disable();
//		// @formatter:on
//  }

//
	    @Override
	    public void configure(HttpSecurity http) throws Exception {
	        http.csrf().disable().antMatcher("/**");
	    }
	    @Bean
	    public FilterRegistrationBean corsFilterRegistrationBean() {
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration config = new CorsConfiguration();
	        config.applyPermitDefaultValues();
	        config.setAllowCredentials(true);
	        config.setAllowedOrigins(Arrays.asList("*"));
	        config.setAllowedHeaders(Arrays.asList("*"));
	        config.setAllowedMethods(Arrays.asList("*"));
	        config.setExposedHeaders(Arrays.asList("content-length"));
	        config.setMaxAge(3600L);
	        source.registerCorsConfiguration("/**", config);
	        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
	        bean.setOrder(0);
	        return bean;
	    }
}
