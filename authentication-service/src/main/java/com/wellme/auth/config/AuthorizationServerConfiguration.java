/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.auth.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.approval.ApprovalStore;
import org.springframework.security.oauth2.provider.approval.JdbcApprovalStore;
import org.springframework.security.oauth2.provider.client.JdbcClientDetailsService;
import org.springframework.security.oauth2.provider.code.AuthorizationCodeServices;
import org.springframework.security.oauth2.provider.code.JdbcAuthorizationCodeServices;
import org.springframework.security.oauth2.provider.error.OAuth2AccessDeniedHandler;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;

/**
 * The Class AuthorizationServerConfiguration.
 */
@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {
	/** The medi link mysql auth data source. */
	@Autowired
	DataSource mediLinkMysqlAuthDataSource;
	
	@Autowired
    private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
    private PasswordEncoder oauthClientPasswordEncoder;
	

	/**
	 * Client details service.
	 *
	 * @return the jdbc client details service
	 */
	@Bean
	public JdbcClientDetailsService clientDetailsService() {
		return new JdbcClientDetailsService(mediLinkMysqlAuthDataSource);
	}

	/**
	 * Token store.
	 *
	 * @return the token store
	 */
	@Bean
	public TokenStore tokenStore() {
		return new JdbcTokenStore(mediLinkMysqlAuthDataSource);
	}

	/**
	 * Approval store.
	 *
	 * @return the approval store
	 */
	@Bean
	public ApprovalStore approvalStore() {
		return new JdbcApprovalStore(mediLinkMysqlAuthDataSource);
	}

	/**
	 * Authorization code services.
	 *
	 * @return the authorization code services
	 */
	@Bean
	public AuthorizationCodeServices authorizationCodeServices() {
		return new JdbcAuthorizationCodeServices(mediLinkMysqlAuthDataSource);
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.oauth2.config.annotation.web.configuration.
	 * AuthorizationServerConfigurerAdapter#configure(org.springframework.security.
	 * oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer)
	 */
	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.withClientDetails(clientDetailsService());
	}
	
    @Bean
    public OAuth2AccessDeniedHandler oauthAccessDeniedHandler() {
        return new OAuth2AccessDeniedHandler();
    }

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.oauth2.config.annotation.web.configuration.
	 * AuthorizationServerConfigurerAdapter#configure(org.springframework.security.
	 * oauth2.config.annotation.web.configurers.
	 * AuthorizationServerSecurityConfigurer)
	 */
	@Override
	public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
	    oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()").passwordEncoder(oauthClientPasswordEncoder);
	    
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.springframework.security.oauth2.config.annotation.web.configuration.
	 * AuthorizationServerConfigurerAdapter#configure(org.springframework.security.
	 * oauth2.config.annotation.web.configurers.
	 * AuthorizationServerEndpointsConfigurer)
	 */
	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
	       endpoints.tokenStore(tokenStore()).authenticationManager(authenticationManager).userDetailsService(userDetailsService);
	       
		
//		
//		endpoints.approvalStore(approvalStore()).authorizationCodeServices(authorizationCodeServices())
//				.tokenStore(tokenStore());
	}
	// static final String CLIEN_ID = "practice-client";
	// static final String CLIENT_SECRET = "Password";
	// static final String GRANT_TYPE_PASSWORD = "password";
	// static final String AUTHORIZATION_CODE = "authorization_code";
	// static final String REFRESH_TOKEN = "refresh_token";
	// static final String IMPLICIT = "implicit";
	// static final String SCOPE_READ = "read";
	// static final String SCOPE_WRITE = "write";
	// static final String TRUST = "trust";
	// static final int ACCESS_TOKEN_VALIDITY_SECONDS = 1*60*60;
	// static final int FREFRESH_TOKEN_VALIDITY_SECONDS = 6*60*60;
	//
	// @Autowired
	// private TokenStore tokenStore;
	//
	// @Autowired
	// private AuthenticationManager authenticationManager;
	//
	// @Override
	// public void configure(ClientDetailsServiceConfigurer configurer) throws
	// Exception {
	//
	// configurer
	// .inMemory()
	// .withClient(CLIEN_ID)
	// .secret(CLIENT_SECRET)
	// .authorizedGrantTypes(GRANT_TYPE_PASSWORD, AUTHORIZATION_CODE, REFRESH_TOKEN,
	// IMPLICIT )
	// .scopes(SCOPE_READ, SCOPE_WRITE, TRUST)
	// .accessTokenValiditySeconds(ACCESS_TOKEN_VALIDITY_SECONDS).
	// refreshTokenValiditySeconds(FREFRESH_TOKEN_VALIDITY_SECONDS);
	// }
	//
	// @Override
	// public void configure(AuthorizationServerEndpointsConfigurer endpoints)
	// throws Exception {
	// endpoints.tokenStore(tokenStore)
	// .authenticationManager(authenticationManager);
	// }
}