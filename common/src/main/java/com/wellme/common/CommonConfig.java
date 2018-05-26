/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

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
	@Bean
	public RestTemplate googleMapRestTemplate(@Value("$(google.map.api.connectTimeout:10000)") int connectTimeout,
			@Value("$(google.map.api.readTimeout:10000)") int readTimeout){
		RestTemplate restTemplate = new RestTemplateBuilder().setConnectTimeout(connectTimeout).setReadTimeout(readTimeout).build(); 
		return restTemplate;
	}
	
}
