/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.Address;
import com.wellme.common.model.BaseVO;
import com.wellme.common.model.Phone;
import com.wellme.common.model.SocialProfile;

/**
 * The Class SearchConsultantResultDto.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "rowVersionId" })
public class SearchConsultantResultDto  extends BaseVO{
	
	/** The consultant id. */
	private Long consultantId;
	
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
	
	
	/** The specialities. */
	private List<String> specialities;
	
	/** The insurance provider dto. */
	private List<InsuranceProviderDto> insuranceProviderDto = new ArrayList<>();
	
	/** The practice. */
	private List<SearchPracticeResultDto> practices = new ArrayList<>();
	
	/**
	 * Gets the consultant id.
	 *
	 * @return the consultant id
	 */
	public Long getConsultantId() {
		return consultantId;
	}

	/**
	 * Sets the consultant id.
	 *
	 * @param consultantId the new consultant id
	 */
	public void setConsultantId(Long consultantId) {
		this.consultantId = consultantId;
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

	/**
	 * Gets the specialities.
	 *
	 * @return the specialities
	 */
	public List<String> getSpecialities() {
		return specialities;
	}

	/**
	 * Sets the specialities.
	 *
	 * @param specialities the new specialities
	 */
	public void setSpecialities(List<String> specialities) {
		this.specialities = specialities;
	}

	/**
	 * Gets the insurance provider dto.
	 *
	 * @return the insurance provider dto
	 */
	public List<InsuranceProviderDto> getInsuranceProviderDto() {
		return insuranceProviderDto;
	}

	/**
	 * Sets the insurance provider dto.
	 *
	 * @param insuranceProviderDto the new insurance provider dto
	 */
	public void setInsuranceProviderDto(List<InsuranceProviderDto> insuranceProviderDto) {
		this.insuranceProviderDto = insuranceProviderDto;
	}

	/**
	 * Gets the practice.
	 *
	 * @return the practice
	 */
	public List<SearchPracticeResultDto> getPractices() {
		return practices;
	}

	/**
	 * Sets the practice.
	 *
	 * @param practice the new practice
	 */
	public void setPractices(List<SearchPracticeResultDto> practices) {
		this.practices = practices;
	}
}
