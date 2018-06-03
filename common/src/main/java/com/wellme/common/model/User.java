/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Class User.
 */
public class User extends BaseVO {

	/** The user name. */
	private String userName;

	/** The first name. */
	private String firstName;

	/** The last name. */
	private String lastName;

	/** The middle name. */
	private String middleName;

	/** The profile pic url. */
	private String profilePicUrl;

	/** The emails. */
	private List<String> emails;

	/** The picture urls. */
	private List<String> pictureUrls;

	/** The addresses. */
	private List<Address> addresses;

	/** The phones. */
	private List<Phone> phones;

	/** The social profiles. */
	private List<SocialProfile> socialProfiles;

	/** User's full name. */
	private String userFullName;

	/** The gender. */
	private String gender;

	/**
	 * Instantiates a new user.
	 *
	 * @param userId            the user id
	 * @param userName            the user name
	 * @param firstName            the first name
	 * @param lastName            the last name
	 * @param middleName            the middle name
	 * @param profilePicUrl            the profile pic url
	 * @param emails            the emails
	 * @param pictureUrls            the picture urls
	 * @param addresses            the addresses
	 * @param phones            the phones
	 * @param socialProfiles            the social profiles
	 * @param userFullName            the user full name
	 * @param gender            the gender
	 * @param insTs            the ins ts
	 * @param updTs            the upd ts
	 * @param insLogin            the ins login
	 * @param updLogin            the upd login
	 * @param versionId            the version id
	 * @param previosVersionId            the previos version id
	 */
	public User(String userName, String firstName, String lastName, String middleName,
			String profilePicUrl, List<String> emails, List<String> pictureUrls, List<Address> addresses,
			List<Phone> phones, List<SocialProfile> socialProfiles, String userFullName, String gender, Date insTs,
			Date updTs, String insLogin, String updLogin, long versionId, long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.profilePicUrl = profilePicUrl;
		this.emails = emails;
		this.pictureUrls = pictureUrls;
		this.addresses = addresses;
		this.phones = phones;
		this.socialProfiles = socialProfiles;
		this.userFullName = userFullName;
		this.gender = gender;
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
	 * Gets the first name.
	 *
	 * @return the first name
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Sets the first name.
	 *
	 * @param firstName
	 *            the new first name
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	/**
	 * Gets the last name.
	 *
	 * @return the last name
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Sets the last name.
	 *
	 * @param lastName
	 *            the new last name
	 */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	/**
	 * Gets the middle name.
	 *
	 * @return the middle name
	 */
	public String getMiddleName() {
		return middleName;
	}

	/**
	 * Sets the middle name.
	 *
	 * @param middleName
	 *            the new middle name
	 */
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	/**
	 * Gets the addresses.
	 *
	 * @return the addresses
	 */
	public List<Address> getAddresses() {
		return addresses;
	}

	/**
	 * Sets the addresses.
	 *
	 * @param addresses
	 *            the new addresses
	 */
	public void setAddresses(List<Address> addresses) {
		this.addresses = addresses;
	}

	/**
	 * Gets the phones.
	 *
	 * @return the phones
	 */
	public List<Phone> getPhones() {
		return phones;
	}

	/**
	 * Sets the phones.
	 *
	 * @param phones
	 *            the new phones
	 */
	public void setPhones(List<Phone> phones) {
		this.phones = phones;
	}

	/**
	 * Gets the profile pic url.
	 *
	 * @return the profile pic url
	 */
	public String getProfilePicUrl() {
		return profilePicUrl;
	}

	/**
	 * Sets the profile pic url.
	 *
	 * @param profilePicUrl
	 *            the new profile pic url
	 */
	public void setProfilePicUrl(String profilePicUrl) {
		this.profilePicUrl = profilePicUrl;
	}

	/**
	 * Gets the picture urls.
	 *
	 * @return the picture urls
	 */
	public List<String> getPictureUrls() {
		return pictureUrls;
	}

	/**
	 * Sets the picture urls.
	 *
	 * @param pictureUrls
	 *            the new picture urls
	 */
	public void setPictureUrls(List<String> pictureUrls) {
		this.pictureUrls = pictureUrls;
	}

	/**
	 * Gets the social profiles.
	 *
	 * @return the social profiles
	 */
	public List<SocialProfile> getSocialProfiles() {
		return socialProfiles;
	}

	/**
	 * Sets the social profiles.
	 *
	 * @param socialProfiles
	 *            the new social profiles
	 */
	public void setSocialProfiles(List<SocialProfile> socialProfiles) {
		this.socialProfiles = socialProfiles;
	}

	/**
	 * Gets the emails.
	 *
	 * @return the emails
	 */
	public List<String> getEmails() {
		return emails;
	}

	/**
	 * Sets the emails.
	 *
	 * @param emails
	 *            the new emails
	 */
	public void setEmails(List<String> emails) {
		this.emails = emails;
	}

	/**
	 * Gets the user full name.
	 *
	 * @return the userFullName
	 */
	public String getUserFullName() {
		return userFullName;
	}

	/**
	 * Sets the user full name.
	 *
	 * @param userFullName
	 *            the userFullName to set
	 */
	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

	/**
	 * Gets the gender.
	 *
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}

	/**
	 * Sets the gender.
	 *
	 * @param gender
	 *            the new gender
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}

}
