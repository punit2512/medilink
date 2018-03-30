/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.util.List;

import com.wellme.common.Address;
import com.wellme.common.BaseVO;
import com.wellme.common.Phone;
import com.wellme.common.SocialProfile;

/**
 * The Class SearchPracticeResultDto.
 */
public class SearchPracticeResultDto  extends BaseVO{
	
	/** The practice name. */
	private String practiceName;
	
	/** The consultants. */
	private List<SearchConsultantResultDto> consultants;
	
	/** The address. */
	private List<Address> addresses;
	
	/** The phone. */
	private List<Phone> phones;
	
	/** The practice social profile. */
	private List<SocialProfile> practiceSocialProfiles;
	
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
	public List<Address> getAddresses() {
		return addresses;
	}

	/**
	 * Sets the addresses.
	 *
	 * @param addresses the addresses to set
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
	 * Instantiates a new search practice result dto.
	 *
	 * @param practiceName the practice name
	 * @param consultants the consultants
	 * @param addresses the addresses
	 * @param phones the phones
	 * @param practiceSocialProfiles the practice social profiles
	 */
	public SearchPracticeResultDto(String practiceName, List<SearchConsultantResultDto> consultants, List<Address> addresses,
			List<Phone> phones, List<SocialProfile> practiceSocialProfiles) {
		super();
		this.practiceName = practiceName;
		this.consultants = consultants;
		this.addresses = addresses;
		this.phones = phones;
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
	 * Gets the consultants.
	 *
	 * @return the consultants
	 */
	public List<SearchConsultantResultDto> getConsultants() {
		return consultants;
	}
	
	/**
	 * Sets the consultants.
	 *
	 * @param consultants the consultants to set
	 */
	public void setConsultants(List<SearchConsultantResultDto> consultants) {
		this.consultants = consultants;
	}
	

}
