/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.common.model.Qualification;
import com.wellme.common.model.SocialProfile;
import com.wellme.common.model.User;

// TODO: Auto-generated Javadoc
/**
 * The Class Consultant.
 */
@Document(collection="consultants")
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class Consultant extends User{
	
	/** The consultant id. */
	@Id
	private BigInteger consultantId;
	
	
	/** The npi. */
	private String NPI;
	
	/** The specialities. */
	private List<BigInteger> specialityIds;
	
	/** The qualifications. */
	private List<Qualification> qualifications;
	
	/** The board certificates. */
	@DBRef
	private List<BoardCertificate> boardCertificates;
	
	/** The practice ids. */
	private List<BigInteger> practiceIds;
	
	/** The profile. */
	private String profile;
	
	private List<BigInteger> insurancePlanIds;
	
	/**
	 * Instantiates a new consultant.
	 *
	 * @param userId the user id
	 * @param userName the user name
	 * @param firstName the first name
	 * @param lastName the last name
	 * @param middleName the middle name
	 * @param profilePicUrl the profile pic url
	 * @param emails the emails
	 * @param pictureUrls the picture urls
	 * @param addresses the addresses
	 * @param phones the phones
	 * @param socialProfiles the social profiles
	 * @param userFullName the user full name
	 * @param gender the gender
	 * @param nPI the n PI
	 * @param specialityIds the speciality ids
	 * @param qualifications the qualifications
	 * @param boardCertificates the board certificates
	 * @param practiceIds the practice ids
	 * @param profile the profile
	 * @param appointmentDurationInMins the appointment duration in mins
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public Consultant(
			BigInteger userId, String userName, String firstName, String lastName, String middleName, String profilePicUrl,
			List<String> emails, List<String> pictureUrls, List<Address> addresses, List<Phone> phones,
			List<SocialProfile> socialProfiles, String userFullName, String gender, String NPI,
			List<BigInteger> specialityIds, List<Qualification> qualifications, List<BoardCertificate> boardCertificates, List<BigInteger> practiceIds, String profile,
			int appointmentDurationInMins, List<BigInteger> insurancePlanIds, Date insTs, Date updTs, String insLogin, String updLogin, long versionId, long previosVersionId) {
		super(userId, userName, firstName, lastName,
				middleName, profilePicUrl, emails, pictureUrls, addresses, phones, socialProfiles, userFullName,
				gender, insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.consultantId = userId;
		this.NPI = NPI;
		this.specialityIds = specialityIds;
		this.boardCertificates = boardCertificates;
		this.qualifications = qualifications;
		this.practiceIds = practiceIds;
		this.profile = profile;
		this.appointmentDurationInMins = appointmentDurationInMins;
		this.insurancePlanIds = insurancePlanIds;
	}

	/** The appointment duration in mins. */
	private int appointmentDurationInMins;
	



	/**
	 * Gets the consultant id.
	 *
	 * @return the consultant id
	 */
	public BigInteger getConsultantId() {
		return consultantId;
	}

	/**
	 * Sets the consultant id.
	 *
	 * @param consultantId the new consultant id
	 */
	public void setConsultantId(BigInteger consultantId) {
		this.consultantId = consultantId;
	}

	/**
	 * Gets the specialities.
	 *
	 * @return the specialities
	 */
	public List<BigInteger> getSpecialityIds() {
		return specialityIds;
	}
	
	/**
	 * Sets the specialities.
	 *
	 * @param specialityIds the new speciality ids
	 */
	public void setSpecialityIds(List<BigInteger> specialityIds) {
		this.specialityIds = specialityIds;
	}
	
	/**
	 * Gets the board certificates.
	 *
	 * @return the board certificates
	 */
	public List<BoardCertificate> getBoardCertificates() {
		return boardCertificates;
	}

	/**
	 * Sets the board certificates.
	 *
	 * @param boardCertificates the new board certificates
	 */
	public void setBoardCertificates(List<BoardCertificate> boardCertificates) {
		this.boardCertificates = boardCertificates;
	}

	/**
	 * Gets the qualifications.
	 *
	 * @return the qualifications
	 */
	public List<Qualification> getQualifications() {
		return qualifications;
	}
	
	/**
	 * Sets the qualifications.
	 *
	 * @param qualifications the new qualifications
	 */
	public void setQualifications(List<Qualification> qualifications) {
		this.qualifications = qualifications;
	}

	/**
	 * Gets the practice ids.
	 *
	 * @return the practice ids
	 */
	public List<BigInteger> getPracticeIds() {
		return practiceIds;
	}

	/**
	 * Sets the practice ids.
	 *
	 * @param practiceIds the new practice ids
	 */
	public void setPracticeIds(List<BigInteger> practiceIds) {
		this.practiceIds = practiceIds;
	}

	/**
	 * Gets the profile.
	 *
	 * @return the profile
	 */
	public String getProfile() {
		return profile;
	}

	/**
	 * Sets the profile.
	 *
	 * @param profile the new profile
	 */
	public void setProfile(String profile) {
		this.profile = profile;
	}

	/**
	 * Gets the appointment duration in mins.
	 *
	 * @return the appointment duration in mins
	 */
	public int getAppointmentDurationInMins() {
		return appointmentDurationInMins;
	}

	/**
	 * Sets the appointment duration in mins.
	 *
	 * @param appointmentDurationInMins the new appointment duration in mins
	 */
	public void setAppointmentDurationInMins(int appointmentDurationInMins) {
		this.appointmentDurationInMins = appointmentDurationInMins;
	}

	/**
	 * Gets the npi.
	 *
	 * @return the npi
	 */
	public String getNPI() {
		return NPI;
	}

	/**
	 * Sets the npi.
	 *
	 * @param nPI the new npi
	 */
	public void setNPI(String NPI) {
		this.NPI = NPI;
	}

	public List<BigInteger> getInsurancePlanIds() {
		return insurancePlanIds;
	}

	public void setInsurancePlanIds(List<BigInteger> insurancePlanIds) {
		this.insurancePlanIds = insurancePlanIds;
	}
	
}
