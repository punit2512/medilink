/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.auth.factory;

import java.util.List;

import org.springframework.stereotype.Component;

import com.wellme.auth.security.ApplicationUser;
import com.wellme.auth.security.Authority;

/**
 * A factory for creating ApplicationUser objects.
 */
@Component
public class ApplicationUserFactory {
	
	
	/**
	 * Creates a new ApplicationUser object.
	 *
	 * @param userName the user name
	 * @param password the password
	 * @param primaryAuthority the primary role
	 * @param roles the roles
	 * @return the application user
	 */
	public ApplicationUser createApplicationUser(String userName, boolean enabled, String password, List<Authority> roles) {
		return new ApplicationUser(userName, enabled, password, roles);
	}
}
