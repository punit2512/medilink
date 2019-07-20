/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.model;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.BaseVO;

/**
 * The Class PatientAppointment.
 */
@Document(collection="patientAppointments")
public class PatientAppointment extends BaseVO{
	
	/** The patient appointment id. */
	BigInteger patientAppointmentId;
	
	/** The patient id. */
	BigInteger patientId;
	
	/** The appointment id. */
	BigInteger appointmentId;
	
	/** The appointment start date. */
	Date appointmentStartDate;
	
	/** The appointment end date. */
	Date appointmentEndDate;
	
	/** The practice id. */
	BigInteger practiceId;
	
	/** The consultant id. */
	BigInteger consultantId;
	
	/** The insurance plan id. */
	BigInteger insurancePlanId;
	
	/** The insurance provider id. */
	BigInteger insuranceProviderId;
	
	/** The appoointment status. */
	String appoointmentStatus;
	
	
	/**
	 * Instantiates a new patient appointment.
	 *
	 * @param patientAppointmentId the patient appointment id
	 * @param patientId the patient id
	 * @param appointmentId the appointment id
	 * @param appointmentStartDate the appointment start date
	 * @param appointmentEndDate the appointment end date
	 * @param practiceId the practice id
	 * @param consultantId the consultant id
	 * @param insurancePlanId the insurance plan id
	 * @param insuranceProviderId the insurance provider id
	 * @param appointmentStatus the appointment status
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public PatientAppointment(BigInteger patientAppointmentId, BigInteger patientId, BigInteger appointmentId,
			Date appointmentStartDate, Date appointmentEndDate, BigInteger practiceId, BigInteger consultantId,
			BigInteger insurancePlanId, BigInteger insuranceProviderId, String appointmentStatus, Date insTs, Date updTs, String insLogin, String updLogin, long versionId,
			long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.patientAppointmentId = patientAppointmentId;
		this.patientId = patientId;
		this.appointmentId = appointmentId;
		this.appointmentStartDate = appointmentStartDate;
		this.appointmentEndDate = appointmentEndDate;
		this.practiceId = practiceId;
		this.consultantId = consultantId;
		this.insurancePlanId = insurancePlanId;
		this.insuranceProviderId = insuranceProviderId;
		this.appoointmentStatus = appointmentStatus;
	}
	
	/**
	 * Gets the patient appointment id.
	 *
	 * @return the patient appointment id
	 */
	public BigInteger getPatientAppointmentId() {
		return patientAppointmentId;
	}
	
	/**
	 * Sets the patient appointment id.
	 *
	 * @param patientAppointmentId the new patient appointment id
	 */
	public void setPatientAppointmentId(BigInteger patientAppointmentId) {
		this.patientAppointmentId = patientAppointmentId;
	}
	
	/**
	 * Gets the patient id.
	 *
	 * @return the patient id
	 */
	public BigInteger getPatientId() {
		return patientId;
	}
	
	/**
	 * Sets the patient id.
	 *
	 * @param patientId the new patient id
	 */
	public void setPatientId(BigInteger patientId) {
		this.patientId = patientId;
	}
	
	/**
	 * Gets the appointment id.
	 *
	 * @return the appointment id
	 */
	public BigInteger getAppointmentId() {
		return appointmentId;
	}
	
	/**
	 * Sets the appointment id.
	 *
	 * @param appointmentId the new appointment id
	 */
	public void setAppointmentId(BigInteger appointmentId) {
		this.appointmentId = appointmentId;
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
	 * Gets the appoointment status.
	 *
	 * @return the appoointment status
	 */
	public String getAppoointmentStatus() {
		return appoointmentStatus;
	}

	/**
	 * Sets the appoointment status.
	 *
	 * @param appoointmentStatus the new appoointment status
	 */
	public void setAppoointmentStatus(String appoointmentStatus) {
		this.appoointmentStatus = appoointmentStatus;
	}
}
