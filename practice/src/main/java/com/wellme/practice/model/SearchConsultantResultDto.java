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
 * The Class SearchConsultantResultDto.
 */
public class SearchConsultantResultDto  extends BaseVO{
	
	/** The consultant name. */
	private String consultantName;
	
	/** The address. */
	private List<Address> addresses;
	
	/** The phone. */
	private List<Phone> phones;
	
	/** The social profile. */
	private List<SocialProfile> socialProfiles;
	
	/** The available slots. */
	private List<AvailableSlotsDto> availableSlots;
	
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
	 * Gets the social profiles.
	 *
	 * @return the socialProfiles
	 */
	public List<SocialProfile> getSocialProfiles() {
		return socialProfiles;
	}

	/**
	 * Sets the social profiles.
	 *
	 * @param socialProfiles the socialProfiles to set
	 */
	public void setSocialProfiles(List<SocialProfile> socialProfiles) {
		this.socialProfiles = socialProfiles;
	}

	/**
	 * Instantiates a new search consultant result dto.
	 */
	public SearchConsultantResultDto() {
		super();
	}

	/**
	 * Instantiates a new search consultant result dto.
	 *
	 * @param consultantName the consultant name
	 * @param addresses the addresses
	 * @param phones the phones
	 * @param socialProfiles the social profiles
	 * @param availableSlots the available slots
	 */
	public SearchConsultantResultDto(String consultantName, List<Address> addresses, List<Phone> phones, List<SocialProfile> socialProfiles,
			List<AvailableSlotsDto> availableSlots) {
		super();
		this.consultantName = consultantName;
		this.addresses = addresses;
		this.phones = phones;
		this.socialProfiles = socialProfiles;
		this.availableSlots = availableSlots;
	}

	/**
	 * Gets the consultant name.
	 *
	 * @return the consultantName
	 */
	public String getConsultantName() {
		return consultantName;
	}
	
	/**
	 * Sets the consultant name.
	 *
	 * @param consultantName the consultantName to set
	 */
	public void setConsultantName(String consultantName) {
		this.consultantName = consultantName;
	}

	
	/**
	 * Gets the available slots.
	 *
	 * @return the availableSlots
	 */
	public List<AvailableSlotsDto> getAvailableSlots() {
		return availableSlots;
	}
	
	/**
	 * Sets the available slots.
	 *
	 * @param availableSlots the availableSlots to set
	 */
	public void setAvailableSlots(List<AvailableSlotsDto> availableSlots) {
		this.availableSlots = availableSlots;
	}
}
