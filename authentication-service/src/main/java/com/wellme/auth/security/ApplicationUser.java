/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.auth.security;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The Class ApplicationUser.
 */
@Entity
@Table(name = "application_user")
public class ApplicationUser {
	/** The user id. */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "app_user_id_generator")
	@SequenceGenerator(name = "app_user_id_generator", sequenceName = "APP_USER_ID_SEQ", initialValue=1000, allocationSize = 50)
	@Column(name = "USER_ID", updatable = false, nullable = false)
	private BigInteger userId;

	/** The enabled. */
	@Column(name = "ENABLED")
	private boolean enabled;

	/** The user name. */
	@Column(name = "USER_NAME")
	private String userName;

	/** The password. */
	@Column(name = "PASSWORD")
	private String password;

	/** The authorities. */
	@ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
	@JoinTable(name = "USER_AUTHORITY", joinColumns = { @JoinColumn(name = "USER_id") }, inverseJoinColumns = {
			@JoinColumn(name = "AUTHORITY_id") })
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
