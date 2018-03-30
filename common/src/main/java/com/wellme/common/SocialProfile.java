/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common;

/**
 * The Class SocialProfile.
 */
public class SocialProfile extends BaseVO{
	
	/** The social type. */
	private String socialType;
	
	/** The social id. */
	private String socialId;
	
	/** The social description. */
	private String socialDescription;
	
	/**
	 * Instantiates a new social profile.
	 *
	 * @param socialType the social type
	 * @param socialId the social id
	 * @param socialDescription the social description
	 */
	public SocialProfile(String socialType, String socialId, String socialDescription) {
		super();
		this.socialType = socialType;
		this.socialId = socialId;
		this.socialDescription = socialDescription;
	}
	
	/**
	 * Gets the social type.
	 *
	 * @return the socialType
	 */
	public String getSocialType() {
		return socialType;
	}
	
	/**
	 * Sets the social type.
	 *
	 * @param socialType the socialType to set
	 */
	public void setSocialType(String socialType) {
		this.socialType = socialType;
	}
	
	/**
	 * Gets the social id.
	 *
	 * @return the socialId
	 */
	public String getSocialId() {
		return socialId;
	}
	
	/**
	 * Sets the social id.
	 *
	 * @param socialId the socialId to set
	 */
	public void setSocialId(String socialId) {
		this.socialId = socialId;
	}
	
	/**
	 * Gets the social description.
	 *
	 * @return the socialDescription
	 */
	public String getSocialDescription() {
		return socialDescription;
	}
	
	/**
	 * Sets the social description.
	 *
	 * @param socialDescription the socialDescription to set
	 */
	public void setSocialDescription(String socialDescription) {
		this.socialDescription = socialDescription;
	}
	
}
