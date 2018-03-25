/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

/**
 * The Class AvailableSlotsDto.
 */
public class AvailableSlotsDto {
	
	/** The appointment date. */
	private LocalDate appointmentDate;
	
	/** The available times. */
	private List<LocalTime> availableTimes;
	
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
	 * Gets the available times.
	 *
	 * @return the availableTimes
	 */
	public List<LocalTime> getAvailableTimes() {
		return availableTimes;
	}
	
	/**
	 * Sets the available times.
	 *
	 * @param availableTimes the availableTimes to set
	 */
	public void setAvailableTimes(List<LocalTime> availableTimes) {
		this.availableTimes = availableTimes;
	}
}
