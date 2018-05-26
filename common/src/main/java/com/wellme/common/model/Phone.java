/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The Class Phone.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class Phone extends BaseVO{
	
	/** The phone type. */
	private String phoneType;
	
	/** The country code. */
	private String countryCode;
	
	/** The area code. */
	private String areaCode;
	
	/** The phone number. */
	private String phoneNumber;
	
	/**
	 * Instantiates a new phone.
	 *
	 * @param phoneType the phone type
	 * @param countryCode the country code
	 * @param areaCode the area code
	 * @param phoneNumber the phone number
	 */
	public Phone(String phoneType, String countryCode, String areaCode, String phoneNumber) {
		super();
		this.phoneType = phoneType;
		this.countryCode = countryCode;
		this.areaCode = areaCode;
		this.phoneNumber = phoneNumber;
	}

	/**
	 * Gets the phone type.
	 *
	 * @return the phone type
	 */
	public String getPhoneType() {
		return phoneType;
	}
	
	/**
	 * Sets the phone type.
	 *
	 * @param phoneType the new phone type
	 */
	public void setPhoneType(String phoneType) {
		this.phoneType = phoneType;
	}
	
	/**
	 * Gets the country code.
	 *
	 * @return the country code
	 */
	public String getCountryCode() {
		return countryCode;
	}
	
	/**
	 * Sets the country code.
	 *
	 * @param countryCode the new country code
	 */
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	
	/**
	 * Gets the area code.
	 *
	 * @return the area code
	 */
	public String getAreaCode() {
		return areaCode;
	}
	
	/**
	 * Sets the area code.
	 *
	 * @param areaCode the new area code
	 */
	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}
	
	/**
	 * Gets the phone number.
	 *
	 * @return the phone number
	 */
	public String getPhoneNumber() {
		return phoneNumber;
	}
	
	/**
	 * Sets the phone number.
	 *
	 * @param phoneNumber the new phone number
	 */
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	
}
