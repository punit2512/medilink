/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import java.math.BigInteger;
import java.util.List;

/**
 * The Class ApplicationUser.
 */
public class ApplicationUser {
	/** The user id. */

	private BigInteger userId;

	/** The enabled. */
	private boolean enabled;

	/** The user name. */
	private String userName;

	/** The password. */
	private String password;

	/** The authorities. */
	private List<Authority> authorities;

	public ApplicationUser() {
		super();
	}

	/**
	 * Instantiates a new application user.
	 *
	 * @param userId
	 *            the user id
	 * @param userName
	 *            the user name
	 * @param password
	 *            the password
	 * @param enabled
	 *            the enabled
	 * @param authorities
	 *            the authorities
	 */
	public ApplicationUser(String userName, boolean enabled, String password, List<Authority> authorities) {
		super();
		this.userName = userName;
		this.enabled = enabled;
		this.password = password;
		this.authorities = authorities;
	}

	/**
	 * Gets the user id.
	 *
	 * @return the user id
	 */
	public BigInteger getUserId() {
		return userId;
	}

	/**
	 * Sets the user id.
	 *
	 * @param userId
	 *            the new user id
	 */
	public void setUserId(BigInteger userId) {
		this.userId = userId;
	}

	/**
	 * Gets the user name.
	 *
	 * @return the user name
	 */
	public String getUserName() {
		return userName;
	}

	/**
	 * Sets the user name.
	 *
	 * @param userName
	 *            the new user name
	 */
	public void setUserName(String userName) {
		this.userName = userName;
	}

	/**
	 * Checks if is enabled.
	 *
	 * @return true, if is enabled
	 */
	public boolean isEnabled() {
		return enabled;
	}

	/**
	 * Sets the enabled.
	 *
	 * @param enabled
	 *            the new enabled
	 */
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	/**
	 * Gets the password.
	 *
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Sets the password.
	 *
	 * @param password
	 *            the new password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Gets the authorities.
	 *
	 * @return the authorities
	 */
	public List<Authority> getAuthorities() {
		return authorities;
	}

	/**
	 * Sets the authorities.
	 *
	 * @param authorities
	 *            the new authorities
	 */
	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}
}
