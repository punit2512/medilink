/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;

import com.wellme.common.model.BaseVO;


/**
 * The Class Appointment.
 */
public class Appointment extends BaseVO {
	
	/** The appointment id. */
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="appointment_id")
	private long appointmentId;
	
	/** The consultant id. */
	@Column(name="consultant_id")
	private String consultantId;
	
	/** The practice id. */
	@Column(name="practice_id")
	private String practiceId;
	
	/** The patient id. */
	@Column(name="patient_id")
	private String patientId;
	
	/** The appointment date. */
	@Column(name="appointment_date")
	private LocalDate appointmentDate;
	
	/** The start time. */
	@Column(name="start_time")
	private LocalTime startTime;
	
	/** The end time. */
	@Column(name="end_time")
	private LocalTime endTime;
	
	/** The status. */
	@Column(name="status")
	private String status;
	
	/** The special instructions. */
	@Column(name="special_instructions")
	private String specialInstructions;
	
	/** The ins ts. */
	@Column(name="ins_ts")
	private Date insTs;
	
	/** The upd ts. */
	@Column(name="upd_ts")
	private Date updTs;
	
	/** The ins login. */
	@Column(name="ins_login")
	private String insLogin;
	
	/** The upd login. */
	@Column(name="upd_login")
	private String updLogin;
	


	/**
	 * Instantiates a new appointment.
	 *
	 * @param appointmentId the appointment id
	 * @param consultantId the consultant id
	 * @param practiceId the practice id
	 * @param patientId the patient id
	 * @param appointmentDate the appointment date
	 * @param startTime the start time
	 * @param endTime the end time
	 * @param status the status
	 * @param specialInstructions the special instructions
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 */
	public Appointment(long appointmentId, String consultantId, String practiceId, String patientId,
			LocalDate appointmentDate, LocalTime startTime, LocalTime endTime, String status, String specialInstructions, Date insTs,
			Date updTs, String insLogin, String updLogin) {
		super();
		this.appointmentId = appointmentId;
		this.consultantId = consultantId;
		this.practiceId = practiceId;
		this.patientId = patientId;
		this.appointmentDate = appointmentDate;
		this.startTime = startTime;
		this.endTime = endTime;
		this.status = status;
		this.specialInstructions = specialInstructions;
		this.insTs = insTs;
		this.updTs = updTs;
		this.insLogin = insLogin;
		this.updLogin = updLogin;
	}

	/**
	 * Gets the appointment id.
	 *
	 * @return the appointment id
	 */
	public long getAppointmentId() {
		return appointmentId;
	}

	/**
	 * Sets the appointment id.
	 *
	 * @param appointmentId the new appointment id
	 */
	public void setAppointmentId(long appointmentId) {
		this.appointmentId = appointmentId;
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
	public String getStatus() {
		return status;
	}
	
	/**
	 * Sets the status.
	 *
	 * @param status the status to set
	 */
	public void setStatus(String status) {
		this.status = status;
	}
	

	/**
	 * Gets the ins ts.
	 *
	 * @return the ins ts
	 */
	public Date getInsTs() {
		return insTs;
	}

	/**
	 * Sets the ins ts.
	 *
	 * @param insTs the new ins ts
	 */
	public void setInsTs(Date insTs) {
		this.insTs = insTs;
	}

	/**
	 * Gets the upd ts.
	 *
	 * @return the upd ts
	 */
	public Date getUpdTs() {
		return updTs;
	}

	/**
	 * Sets the upd ts.
	 *
	 * @param updTs the new upd ts
	 */
	public void setUpdTs(Date updTs) {
		this.updTs = updTs;
	}

	/**
	 * Gets the ins login.
	 *
	 * @return the ins login
	 */
	public String getInsLogin() {
		return insLogin;
	}

	/**
	 * Sets the ins login.
	 *
	 * @param insLogin the new ins login
	 */
	public void setInsLogin(String insLogin) {
		this.insLogin = insLogin;
	}

	/**
	 * Gets the upd login.
	 *
	 * @return the upd login
	 */
	public String getUpdLogin() {
		return updLogin;
	}

	/**
	 * Sets the upd login.
	 *
	 * @param updLogin the new upd login
	 */
	public void setUpdLogin(String updLogin) {
		this.updLogin = updLogin;
	}

	/**
	 * Gets the special instructions.
	 *
	 * @return the special instructions
	 */
	public String getSpecialInstructions() {
		return specialInstructions;
	}

	/**
	 * Sets the special instructions.
	 *
	 * @param specialInstructions the new special instructions
	 */
	public void setSpecialInstructions(String specialInstructions) {
		this.specialInstructions = specialInstructions;
	}
	
}
