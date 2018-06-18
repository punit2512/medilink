/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * The Class CommonConfig.
 */
@Configuration
public class CommonConfig {
	
	/**
	 * Google map rest template.
	 *
	 * @param connectTimeout the connect timeout
	 * @param readTimeout the read timeout
	 * @return the rest template
	 */
	/*@Bean
	public RestTemplate googleMapRestTemplate(@Value("$(google.map.api.connectTimeout:10000)") int connectTimeout,
			@Value("$(google.map.api.readTimeout:10000)") int readTimeout){
		RestTemplate restTemplate = new RestTemplateBuilder().setConnectTimeout(connectTimeout).setReadTimeout(readTimeout).build(); 
		return restTemplate;
	}*/

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("*")
						.allowedHeaders("*");
			}
		};
	}
	
}
