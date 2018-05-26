/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.Address;
import com.wellme.common.model.BaseVO;
import com.wellme.common.model.Phone;
import com.wellme.common.model.SocialProfile;

/**
 * The Class Practice.
 */
@Document(collection="practices")
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class Practice  extends BaseVO{
	
	/** The practice id. */
	@Id
	private BigInteger practiceId;
	
	/** The practive name. */
	private String practiceName;
	
	/** The practice details. */
	private String practiceDetails;
	
	/** The specialities supported. */
	private List<BigInteger> specialitiesSupported;
	
	/** The addresses. */
	private List<Address> addresses;
	
	/** The phones. */
	private List<Phone> phones;
	
	/** The insurance providers. */
	private List<BigInteger> insuranceProviderIds;
	
	/** The consultants. */
	private List<BigInteger> consultantIds;
	
	/** The social profiles. */
	private List<SocialProfile> socialProfiles;
	
	/** The parent practice id. */
	private BigInteger parentPracticeId;
	
	/** The primary address. */
	private Address primaryAddress;

	/**
	 * Instantiates a new practice.
	 *
	 * @param practiceId the practice id
	 * @param practiceName the practice name
	 * @param practiceDetails the practice details
	 * @param specialitiesSupported the specialities supported
	 * @param addresses the addresses
	 * @param phones the phones
	 * @param insuranceProviderIds the insurance provider ids
	 * @param consultantIds the consultant ids
	 * @param socialProfiles the social profiles
	 * @param parentPracticeId the parent practice id
	 * @param primaryAddress the primary address
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public Practice(BigInteger practiceId, String practiceName, String practiceDetails, List<BigInteger> specialitiesSupported,
			List<Address> addresses, List<Phone> phones, List<BigInteger> insuranceProviderIds, List<BigInteger> consultantIds,
			List<SocialProfile> socialProfiles, BigInteger parentPracticeId, Address primaryAddress, Date insTs, Date updTs, String insLogin, String updLogin, long versionId, long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.practiceId = practiceId;
		this.practiceName = practiceName;
		this.practiceDetails = practiceDetails;
		this.specialitiesSupported = specialitiesSupported;
		this.addresses = addresses;
		this.phones = phones;
		this.insuranceProviderIds = insuranceProviderIds;
		this.consultantIds = consultantIds;
		this.socialProfiles = socialProfiles;
		this.parentPracticeId = parentPracticeId;
		this.primaryAddress = primaryAddress;
	}

	/**
	 * Gets the practice id.
	 *
	 * @return the practice id
	 */
	public BigInteger getPracticeId() {
		return practiceId;
	}
	
	/**
	 * Sets the practice id.
	 *
	 * @param practiceId the new practice id
	 */
	public void setPracticeId(BigInteger practiceId) {
		this.practiceId = practiceId;
	}
	
	/**
	 * Gets the practive name.
	 *
	 * @return the practive name
	 */
	public String getPracticeName() {
		return practiceName;
	}
	
	/**
	 * Sets the practive name.
	 *
	 * @param practiceName the new practice name
	 */
	public void setPracticeName(String practiceName) {
		this.practiceName = practiceName;
	}
	
	/**
	 * Gets the practice details.
	 *
	 * @return the practice details
	 */
	public String getPracticeDetails() {
		return practiceDetails;
	}
	
	/**
	 * Sets the practice details.
	 *
	 * @param practiceDetails the new practice details
	 */
	public void setPracticeDetails(String practiceDetails) {
		this.practiceDetails = practiceDetails;
	}
	
	/**
	 * Gets the specialities supported.
	 *
	 * @return the specialities supported
	 */
	public List<BigInteger> getSpecialitiesSupported() {
		return specialitiesSupported;
	}
	
	/**
	 * Sets the specialities supported.
	 *
	 * @param specialitiesSupported the new specialities supported
	 */
	public void setSpecialitiesSupported(List<BigInteger> specialitiesSupported) {
		this.specialitiesSupported = specialitiesSupported;
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
	 * Gets the insurance provider ids.
	 *
	 * @return the insurance provider ids
	 */
	public List<BigInteger> getInsuranceProviderIds() {
		return insuranceProviderIds;
	}

	/**
	 * Sets the insurance provider ids.
	 *
	 * @param insuranceProviderIds the new insurance provider ids
	 */
	public void setInsuranceProviderIds(List<BigInteger> insuranceProviderIds) {
		this.insuranceProviderIds = insuranceProviderIds;
	}

	/**
	 * Gets the consultant ids.
	 *
	 * @return the consultant ids
	 */
	public List<BigInteger> getConsultantIds() {
		return consultantIds;
	}

	/**
	 * Sets the consultant ids.
	 *
	 * @param consultantIds the new consultant ids
	 */
	public void setConsultantIds(List<BigInteger> consultantIds) {
		this.consultantIds = consultantIds;
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
	 * Gets the parent practice id.
	 *
	 * @return the parent practice id
	 */
	public BigInteger getParentPracticeId() {
		return parentPracticeId;
	}

	/**
	 * Sets the parent practice id.
	 *
	 * @param parentPracticeId the new parent practice id
	 */
	public void setParentPracticeId(BigInteger parentPracticeId) {
		this.parentPracticeId = parentPracticeId;
	}

	/**
	 * Gets the primary address.
	 *
	 * @return the primary address
	 */
	public Address getPrimaryAddress() {
		return addresses.get(0);
	}

	/**
	 * Sets the primary address.
	 *
	 * @param primaryAddress the new primary address
	 */
	public void setPrimaryAddress(Address primaryAddress) {
		this.primaryAddress = primaryAddress;
	}	

	
}
