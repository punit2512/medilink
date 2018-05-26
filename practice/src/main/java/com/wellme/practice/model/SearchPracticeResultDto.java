/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.Address;
import com.wellme.common.model.BaseVO;
import com.wellme.common.model.Phone;
import com.wellme.common.model.SocialProfile;

/**
 * The Class SearchPracticeResultDto.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class SearchPracticeResultDto  extends BaseVO{


	/** The practice name. */
	private String practiceName;

	
	/** The address. */
	private Address practiceAddress;
	
	/** The phone. */
	private List<Phone> phones;
	
	/** The practice social profile. */
	private List<SocialProfile> practiceSocialProfiles;
	
	/** The distance in miles. */
	private double distanceInMiles;
	
	
	/**
	 * Instantiates a new search practice result dto.
	 *
	 * @param practiceName the practice name
	 * @param practiceAddress the practice address
	 * @param phones the phones
	 * @param practiceSocialProfiles the practice social profiles
	 * @param distanceInMiles the distance in miles
	 */
	public SearchPracticeResultDto(String practiceName, Address practiceAddress, List<Phone> phones,
			List<SocialProfile> practiceSocialProfiles, double distanceInMiles) {
		super();
		this.practiceName = practiceName;
		this.practiceAddress = practiceAddress;
		this.phones = phones;
		this.practiceSocialProfiles = practiceSocialProfiles;
		this.distanceInMiles = distanceInMiles;
	}

	/**
	 * Instantiates a new search practice result dto.
	 */
	public SearchPracticeResultDto(){
		
	}
	
	/**
	 * Gets the addresses.
	 *
	 * @return the addresses
	 */
	public Address getPrimaryAddress() {
		return practiceAddress;
	}

	/**
	 * Sets the addresses.
	 *
	 * @param practiceAddress the new primary address
	 */
	public void setPrimaryAddress(Address practiceAddress) {
		this.practiceAddress = practiceAddress;
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
	 * @param phones the phones to set
	 */
	public void setPhones(List<Phone> phones) {
		this.phones = phones;
	}

	/**
	 * Gets the practice social profiles.
	 *
	 * @return the practiceSocialProfiles
	 */
	public List<SocialProfile> getPracticeSocialProfiles() {
		return practiceSocialProfiles;
	}

	/**
	 * Sets the practice social profiles.
	 *
	 * @param practiceSocialProfiles the practiceSocialProfiles to set
	 */
	public void setPracticeSocialProfiles(List<SocialProfile> practiceSocialProfiles) {
		this.practiceSocialProfiles = practiceSocialProfiles;
	}



	/**
	 * Gets the practice name.
	 *
	 * @return the practiceName
	 */
	public String getPracticeName() {
		return practiceName;
	}
	
	/**
	 * Sets the practice name.
	 *
	 * @param practiceName the practiceName to set
	 */
	public void setPracticeName(String practiceName) {
		this.practiceName = practiceName;
	}
	
	/**
	 * Gets the distance in miles.
	 *
	 * @return the distance in miles
	 */
	public double getDistanceInMiles() {
		return distanceInMiles;
	}

	/**
	 * Sets the distance in miles.
	 *
	 * @param distanceInMiles the new distance in miles
	 */
	public void setDistanceInMiles(double distanceInMiles) {
		this.distanceInMiles = distanceInMiles;
	}

}
