/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.List;

/**
 * The Class ConsultantDto.
 */
public class ConsultantDto {
	
	/** The consultant id. */
	private BigInteger consultantId;
	/** The npi. */
	private String NPI;
	
	/** The first name. */
	private String firstName;
	
	/** The last name. */
	private String lastName;
	
	/** The middle name. */
	private String middleName;
	
	/** The address. */
	private String address;
	
	/** The gender. */
	private String gender;
	
	/** The languages. */
	private List<String> languages;
	
	/** The professional statement. */
	private String professionalStatement;
	
	/** The reviews. */
	private List<ConsultantReviewDto> reviews;
	/** The available slots. */
	private List<AvailableSlotsDto> availableSlots;
	
	/** The hospital affiliations. */
	private List<String> hospitalAffiliations;
	
	/**
	 * Instantiates a new consultant dto.
	 *
	 * @param consultantId the consultant id
	 * @param nPI the n PI
	 * @param firstName the first name
	 * @param lastName the last name
	 * @param middleName the middle name
	 * @param address the address
	 * @param gender the gender
	 * @param languages the languages
	 * @param professionalStatement the professional statement
	 * @param reviews the reviews
	 * @param availableSlots the available slots
	 * @param hospitalAffiliations the hospital affiliations
	 */
	public ConsultantDto(BigInteger consultantId, String nPI, String firstName, String lastName, String middleName,
			String address, String gender, List<String> languages, String professionalStatement,
			List<ConsultantReviewDto> reviews, List<AvailableSlotsDto> availableSlots,
			List<String> hospitalAffiliations) {
		super();
		this.consultantId = consultantId;
		NPI = nPI;
		this.firstName = firstName;
		this.lastName = lastName;
		this.middleName = middleName;
		this.address = address;
		this.gender = gender;
		this.languages = languages;
		this.professionalStatement = professionalStatement;
		this.reviews = reviews;
		this.availableSlots = availableSlots;
		this.hospitalAffiliations = hospitalAffiliations;
	}
	
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
	public void setNPI(String nPI) {
		NPI = nPI;
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
	 * Gets the address.
	 *
	 * @return the address
	 */
	public String getAddress() {
		return address;
	}
	
	/**
	 * Sets the address.
	 *
	 * @param address the new address
	 */
	public void setAddress(String address) {
		this.address = address;
	}
	
	/**
	 * Gets the gender.
	 *
	 * @return the gender
	 */
	public String getGender() {
		return gender;
	}
	
	/**
	 * Sets the gender.
	 *
	 * @param gender the new gender
	 */
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	/**
	 * Gets the languages.
	 *
	 * @return the languages
	 */
	public List<String> getLanguages() {
		return languages;
	}
	
	/**
	 * Sets the languages.
	 *
	 * @param languages the new languages
	 */
	public void setLanguages(List<String> languages) {
		this.languages = languages;
	}
	
	/**
	 * Gets the professional statement.
	 *
	 * @return the professional statement
	 */
	public String getProfessionalStatement() {
		return professionalStatement;
	}
	
	/**
	 * Sets the professional statement.
	 *
	 * @param professionalStatement the new professional statement
	 */
	public void setProfessionalStatement(String professionalStatement) {
		this.professionalStatement = professionalStatement;
	}
	
	/**
	 * Gets the reviews.
	 *
	 * @return the reviews
	 */
	public List<ConsultantReviewDto> getReviews() {
		return reviews;
	}
	
	/**
	 * Sets the reviews.
	 *
	 * @param reviews the new reviews
	 */
	public void setReviews(List<ConsultantReviewDto> reviews) {
		this.reviews = reviews;
	}
	
	/**
	 * Gets the available slots.
	 *
	 * @return the available slots
	 */
	public List<AvailableSlotsDto> getAvailableSlots() {
		return availableSlots;
	}
	
	/**
	 * Sets the available slots.
	 *
	 * @param availableSlots the new available slots
	 */
	public void setAvailableSlots(List<AvailableSlotsDto> availableSlots) {
		this.availableSlots = availableSlots;
	}
	
	/**
	 * Gets the hospital affiliations.
	 *
	 * @return the hospital affiliations
	 */
	public List<String> getHospitalAffiliations() {
		return hospitalAffiliations;
	}
	
	/**
	 * Sets the hospital affiliations.
	 *
	 * @param hospitalAffiliations the new hospital affiliations
	 */
	public void setHospitalAffiliations(List<String> hospitalAffiliations) {
		this.hospitalAffiliations = hospitalAffiliations;
	}
}
