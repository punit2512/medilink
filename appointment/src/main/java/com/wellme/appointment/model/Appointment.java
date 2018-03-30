/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.time.LocalDate;
import java.time.LocalTime;

import com.wellme.common.BaseVO;


/**
 * The Class Appointment.
 */
public class Appointment extends BaseVO {
	
	/** The consultant id. */
	private String consultantId;
	
	/** The practice id. */
	private String practiceId;
	
	/** The patient id. */
	private String patientId;
	
	/** The appointment date. */
	private LocalDate appointmentDate;
	
	/** The start time. */
	private LocalTime startTime;
	
	/** The end time. */
	private LocalTime endTime;
	
	/** The status. */
	private AppointmentStatus status;
	
	/**
	 * Instantiates a new appointment.
	 *
	 * @param consultantId the consultant id
	 * @param practiceId the practice id
	 * @param patientId the patient id
	 * @param appointmentDate the appointment date
	 * @param startTime the start time
	 * @param endTime the end time
	 * @param status the status
	 */
	public Appointment(String consultantId, String practiceId, String patientId, LocalDate appointmentDate,
			LocalTime startTime, LocalTime endTime, AppointmentStatus status) {
		super();
		this.consultantId = consultantId;
		this.practiceId = practiceId;
		this.patientId = patientId;
		this.appointmentDate = appointmentDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.status = status;
	}

	/**
	 * Gets the consultant id.
	 *
	 * @return the consultantId
	 */
	public String getConsultantId() {
		return consultantId;
	}
	
	/**
	 * Sets the consultant id.
	 *
	 * @param consultantId the consultantId to set
	 */
	public void setConsultantId(String consultantId) {
		this.consultantId = consultantId;
	}
	
	/**
	 * Gets the practice id.
	 *
	 * @return the practiceId
	 */
	public String getPracticeId() {
		return practiceId;
	}
	
	/**
	 * Sets the practice id.
	 *
	 * @param practiceId the practiceId to set
	 */
	public void setPracticeId(String practiceId) {
		this.practiceId = practiceId;
	}
	
	/**
	 * Gets the patient id.
	 *
	 * @return the patientId
	 */
	public String getPatientId() {
		return patientId;
	}
	
	/**
	 * Sets the patient id.
	 *
	 * @param patientId the patientId to set
	 */
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	
	/**
	 * Gets the appointment date.
	 *
	 * @return the appointmentDate
	 */
	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}
	
	/**
	 * Sets the appointment date.
	 *
	 * @param appointmentDate the appointmentDate to set
	 */
	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	
	/**
	 * Gets the start time.
	 *
	 * @return the startTime
	 */
	public LocalTime getStartTime() {
		return startTime;
	}
	
	/**
	 * Sets the start time.
	 *
	 * @param startTime the startTime to set
	 */
	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}
	
	/**
	 * Gets the end time.
	 *
	 * @return the endTime
	 */
	public LocalTime getEndTime() {
		return endTime;
	}
	
	/**
	 * Sets the end time.
	 *
	 * @param endTime the endTime to set
	 */
	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}
	
	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public AppointmentStatus getStatus() {
		return status;
	}
	
	/**
	 * Sets the status.
	 *
	 * @param status the status to set
	 */
	public void setStatus(AppointmentStatus status) {
		this.status = status;
	}
	
}
