/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.model;

import java.util.Date;
import java.util.List;

/**
 * The Class AppointmentDto.
 */
public class AppointmentDto {
	
	/** The event name. */
	private String eventName;
	
	/** The event description. */
	private String eventDescription;
	
	/** The appointment start date. */
	private Date appointmentStartDate;
	
	/** The appointment end date. */
	private Date appointmentEndDate;
	
	/** The appointment location. */
	private String appointmentLocation;
	
	/** The is full day. */
	private boolean isFullDay;
	
	/** The is recurring. */
	private boolean isRecurring;
	
	/** The version id. */
	private Long versionId;
	
	/** The participants. */
	private List<AppointmentParticipantDto> participants;
	
	/**
	 * Instantiates a new appointment dto.
	 *
	 * @param eventId the event id
	 * @param eventName the event name
	 * @param eventDescription the event description
	 * @param appointmentStartDate the appointment start date
	 * @param appointmentEndDate the appointment end date
	 * @param appointmentLocation the appointment location
	 * @param isFullDay the is full day
	 * @param isRecurring the is recurring
	 * @param versionId the version id
	 * @param participants the participants
	 */
	public AppointmentDto(String eventName, String eventDescription, Date appointmentStartDate,
			Date appointmentEndDate, String appointmentLocation, boolean isFullDay, boolean isRecurring,
			Long versionId, List<AppointmentParticipantDto> participants) {
		super();
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.appointmentStartDate = appointmentStartDate;
		this.appointmentEndDate = appointmentEndDate;
		this.appointmentLocation = appointmentLocation;
		this.isFullDay = isFullDay;
		this.isRecurring = isRecurring;
		this.versionId = versionId;
		this.participants = participants;
	}
	
	/**
	 * Gets the event name.
	 *
	 * @return the event name
	 */
	public String getEventName() {
		return eventName;
	}
	
	/**
	 * Sets the event name.
	 *
	 * @param eventName the new event name
	 */
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	/**
	 * Gets the event description.
	 *
	 * @return the event description
	 */
	public String getEventDescription() {
		return eventDescription;
	}
	
	/**
	 * Sets the event description.
	 *
	 * @param eventDescription the new event description
	 */
	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
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
	 * Checks if is full day.
	 *
	 * @return true, if is full day
	 */
	public boolean isFullDay() {
		return isFullDay;
	}
	
	/**
	 * Sets the full day.
	 *
	 * @param isFullDay the new full day
	 */
	public void setFullDay(boolean isFullDay) {
		this.isFullDay = isFullDay;
	}
	
	/**
	 * Checks if is recurring.
	 *
	 * @return true, if is recurring
	 */
	public boolean isRecurring() {
		return isRecurring;
	}
	
	/**
	 * Sets the recurring.
	 *
	 * @param isRecurring the new recurring
	 */
	public void setRecurring(boolean isRecurring) {
		this.isRecurring = isRecurring;
	}
	
	/**
	 * Gets the version id.
	 *
	 * @return the version id
	 */
	public Long getVersionId() {
		return versionId;
	}
	
	/**
	 * Sets the version id.
	 *
	 * @param versionId the new version id
	 */
	public void setVersionId(Long versionId) {
		this.versionId = versionId;
	}
	
	/**
	 * Gets the participants.
	 *
	 * @return the participants
	 */
	public List<AppointmentParticipantDto> getParticipants() {
		return participants;
	}
	
	/**
	 * Sets the participants.
	 *
	 * @param participants the new participants
	 */
	public void setParticipants(List<AppointmentParticipantDto> participants) {
		this.participants = participants;
	}
	

}
