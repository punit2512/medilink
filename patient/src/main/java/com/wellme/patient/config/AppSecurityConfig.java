package com.wellme.patient.config;

import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableOAuth2Sso
public class AppSecurityConfig extends WebSecurityConfigurerAdapter {
	
//	@Override
//    protected void configure(final HttpSecurity http) throws Exception {
//        // @formatter:off
//		http.authorizeRequests().antMatchers("/login").permitAll()
//		.antMatchers("/oauth/token/revokeById/**").permitAll()
//		.antMatchers("/tokens/**").permitAll()
//		.anyRequest().authenticated()
//		.and().formLogin().permitAll()
//		.and().csrf().disable();
//		// @formatter:on
//    }


	    @Override
	    public void configure(HttpSecurity http) throws Exception {
	        http.csrf().disable().antMatcher("/**")
	          .authorizeRequests()
	          .antMatchers("/oauth**", "/", "/login**", "/search**")
	          .permitAll()
	          .anyRequest()
	          .authenticated();
	    }
	    
//	    @Bean
//	    public FilterRegistrationBean corsFilter() {
//	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//	        CorsConfiguration config = new CorsConfiguration();
//	        config.setAllowCredentials(true);
//	        config.addAllowedOrigin("*");
//	        config.addAllowedHeader("*");
//	        config.addAllowedMethod("*");
//	        source.registerCorsConfiguration("/**", config);
//	        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
//	        bean.setOrder(0);
//	        return bean;
//	    }
}
