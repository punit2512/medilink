/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.BaseVO;

/**
 * The Class AvailableSlotsDto.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class AvailableSlotsDto extends BaseVO{
	
	/** The appointment date. */
	private String appointmentDate;
	
	/** The available times. */
	private Map<String, String> availableTimes = new HashMap<>();
	

	/**
	 * Gets the appointment date.
	 *
	 * @return the appointmentDate
	 */
	public String getAppointmentDate() {
		return appointmentDate;
	}
	
	/**
	 * Sets the appointment date.
	 *
	 * @param appointmentDate the appointmentDate to set
	 */
	public void setAppointmentDate(String appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	
	/**
	 * Gets the available times.
	 *
	 * @return the available times
	 */
	public Map<String, String> getAvailableTimes() {
		return availableTimes;
	}

	/**
	 * Sets the available times.
	 *
	 * @param availableTimes the available times
	 */
	public void setAvailableTimes(Map<String, String> availableTimes) {
		this.availableTimes = availableTimes;
	}

}
