package com.wellme.common;

import java.util.List;

// TODO: Auto-generated Javadoc
/**
 * The Class User.
 */
public class User extends BaseVO{
	
	/** The user id. */
	private Integer userId;
	
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
	
	/** User's full name */
	private String userFullName;
	
	/**
	 * Gets the user id.
	 *
	 * @return the user id
	 */
	public Integer getUserId() {
		return userId;
	}
	
	/**
	 * Sets the user id.
	 *
	 * @param userId the new user id
	 */
	public void setUserId(Integer userId) {
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
	 * @param userName the new user name
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
	 * @param firstName the new first name
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
	 * @param lastName the new last name
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
	 * @param middleName the new middle name
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
	 * @param addresses the new addresses
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
	 * @param phones the new phones
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
	 * @param profilePicUrl the new profile pic url
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
	 * @param pictureUrls the new picture urls
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
	 * @param socialProfiles the new social profiles
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
	 * @param emails the new emails
	 */
	public void setEmails(List<String> emails) {
		this.emails = emails;
	}

	/**
	 * @return the userFullName
	 */
	public String getUserFullName() {
		return userFullName;
	}

	/**
	 * @param userFullName the userFullName to set
	 */
	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}

}
