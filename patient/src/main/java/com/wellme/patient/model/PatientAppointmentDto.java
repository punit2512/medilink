/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.wellme.common.util.CustomJsonDateDeserializer;

/**
 * The Class PatientAppointmentDto.
 */
public class PatientAppointmentDto implements Serializable{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	BigDecimal patientAppointmentId;
	
	/** The patient id. */
	private String patientId;
	
	/** The first name. */
	private String firstName;
	
	/** The last name. */
	private String lastName;
	
	/** The middle name. */
	private String middleName;
	
	/** The gender. */
	private String gender;
	
	/** The phone number. */
	private String phoneNumber;
	
	/** The email. */
	private String email;
	
	/** The consultant id. */
	private BigInteger consultantId;
	
	/** The practice id. */
	private BigInteger practiceId;
	
	/** The appointment location. */
	private String appointmentLocation;
	
	/** The appointment start date. */
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date appointmentStartDate;
	
	/** The appointment end date. */
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date appointmentEndDate;
	
	/** The appointment summary. */
	private String appointmentSummary;
	
	/** The appointment notes. */
	private String appointmentNotes;
	
	/** The insurance provider id. */
	private BigInteger insuranceProviderId;
	
	/** The insurance plan id. */
	private BigInteger insurancePlanId;
	
	public PatientAppointmentDto() {
		
	}
	
	public BigDecimal getPatientAppointmentId() {
		return patientAppointmentId;
	}

	public void setPatientAppointmentId(BigDecimal patientAppointmentId) {
		this.patientAppointmentId = patientAppointmentId;
	}

	/**
	 * Gets the patient id.
	 *
	 * @return the patient id
	 */
	public String getPatientId() {
		return patientId;
	}
	
	/**
	 * Sets the patient id.
	 *
	 * @param patientId the new patient id
	 */
	public void setPatientId(String patientId) {
		this.patientId = patientId;
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
	
	/**
	 * Gets the email.
	 *
	 * @return the email
	 */
	public String getEmail() {
		return email;
	}
	
	/**
	 * Sets the email.
	 *
	 * @param email the new email
	 */
	public void setEmail(String email) {
		this.email = email;
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
	 * Gets the appointment location.
	 *
	 * @return the appointment location
	 */
	public String getAppointmentLocation() {
		return appointmentLocation;
	}
	
	/**
	 * Sets the appointment location.
	 *
	 * @param appointmentLocation the new appointment location
	 */
	public void setAppointmentLocation(String appointmentLocation) {
		this.appointmentLocation = appointmentLocation;
	}
	
	/**
	 * Gets the appointment start date.
	 *
	 * @return the appointment start date
	 */
	public Date getAppointmentStartDate() {
		return appointmentStartDate;
	}
	
	/**
	 * Sets the appointment start date.
	 *
	 * @param appointmentStartDate the new appointment start date
	 */
	public void setAppointmentStartDate(Date appointmentStartDate) {
		this.appointmentStartDate = appointmentStartDate;
	}
	
	/**
	 * Gets the appointment end date.
	 *
	 * @return the appointment end date
	 */
	public Date getAppointmentEndDate() {
		return appointmentEndDate;
	}
	
	/**
	 * Sets the appointment end date.
	 *
	 * @param appointmentEndDate the new appointment end date
	 */
	public void setAppointmentEndDate(Date appointmentEndDate) {
		this.appointmentEndDate = appointmentEndDate;
	}
	
	/**
	 * Gets the appointment summary.
	 *
	 * @return the appointment summary
	 */
	public String getAppointmentSummary() {
		return appointmentSummary;
	}
	
	/**
	 * Sets the appointment summary.
	 *
	 * @param appointmentSummary the new appointment summary
	 */
	public void setAppointmentSummary(String appointmentSummary) {
		this.appointmentSummary = appointmentSummary;
	}
	
	/**
	 * Gets the appointment notes.
	 *
	 * @return the appointment notes
	 */
	public String getAppointmentNotes() {
		return appointmentNotes;
	}
	
	/**
	 * Sets the appointment notes.
	 *
	 * @param appointmentNotes the new appointment notes
	 */
	public void setAppointmentNotes(String appointmentNotes) {
		this.appointmentNotes = appointmentNotes;
	}
	
	/**
	 * Gets the insurance provider id.
	 *
	 * @return the insurance provider id
	 */
	public BigInteger getInsuranceProviderId() {
		return insuranceProviderId;
	}
	
	/**
	 * Sets the insurance provider id.
	 *
	 * @param insuranceProviderId the new insurance provider id
	 */
	public void setInsuranceProviderId(BigInteger insuranceProviderId) {
		this.insuranceProviderId = insuranceProviderId;
	}
	
	/**
	 * Gets the insurance plan id.
	 *
	 * @return the insurance plan id
	 */
	public BigInteger getInsurancePlanId() {
		return insurancePlanId;
	}
	
	/**
	 * Sets the insurance plan id.
	 *
	 * @param insurancePlanId the new insurance plan id
	 */
	public void setInsurancePlanId(BigInteger insurancePlanId) {
		this.insurancePlanId = insurancePlanId;
	}
}
