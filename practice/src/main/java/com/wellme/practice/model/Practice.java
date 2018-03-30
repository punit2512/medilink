/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.Address;
import com.wellme.common.BaseVO;
import com.wellme.common.Phone;
import com.wellme.common.SocialProfile;

/**
 * The Class Practice.
 */
@Document(collection="practice")
public class Practice  extends BaseVO{
	
	/** The practice id. */
	@Id
	private String practiceId;
	
	/** The practive name. */
	private String practiceName;
	
	/** The practice details. */
	private String practiceDetails;
	
	/** The specialities supported. */
	@DBRef(db="specialities")
	private List<Speciality> specialitiesSupported;
	
	/** The addresses. */
	private List<Address> addresses;
	
	/** The phones. */
	private List<Phone> phones;
	
	/** The insurance providers. */
	@DBRef(db="insuranceProviders")
	private List<InsuranceProvider> insuranceProviders;
	
	/** The consultants. */
	@DBRef(db="consultants")
	private List<Consultant> consultants;
	
	/** The social profiles. */
	private List<SocialProfile> socialProfiles;
	
	/**
	 * Gets the practice id.
	 *
	 * @return the practice id
	 */
	public String getPracticeId() {
		return practiceId;
	}
	
	/**
	 * Sets the practice id.
	 *
	 * @param practiceId the new practice id
	 */
	public void setPracticeId(String practiceId) {
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
	public List<Speciality> getSpecialitiesSupported() {
		return specialitiesSupported;
	}
	
	/**
	 * Sets the specialities supported.
	 *
	 * @param specialitiesSupported the new specialities supported
	 */
	public void setSpecialitiesSupported(List<Speciality> specialitiesSupported) {
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
	 * Gets the insurance providers.
	 *
	 * @return the insuranceProviders
	 */
	public List<InsuranceProvider> getInsuranceProviders() {
		return insuranceProviders;
	}

	/**
	 * Sets the insurance providers.
	 *
	 * @param insuranceProviders the insuranceProviders to set
	 */
	public void setInsuranceProviders(List<InsuranceProvider> insuranceProviders) {
		this.insuranceProviders = insuranceProviders;
	}

	/**
	 * Gets the consultants.
	 *
	 * @return the consultants
	 */
	public List<Consultant> getConsultants() {
		return consultants;
	}

	/**
	 * Sets the consultants.
	 *
	 * @param consultants the consultants to set
	 */
	public void setConsultants(List<Consultant> consultants) {
		this.consultants = consultants;
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
	

	
}
