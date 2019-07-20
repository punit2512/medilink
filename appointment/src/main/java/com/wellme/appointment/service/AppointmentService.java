/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.service;

import java.util.Collection;
import java.util.Map;

import com.wellme.appointment.model.AppointmentDto;

/**
 * The Interface AppointmentService.
 */
public interface AppointmentService {

	/**
	 * Search by practice and consultants.
	 *
	 * @param participantIdTypeMap
	 *            the participant id type map
	 * @return the list
	 */
	Collection<AppointmentDto> searchByParticipantIdsAndType(Map<String, String> participantIdTypeMap);

	/**
	 * Creates the appointment.
	 *
	 * @param appointment the appointment
	 */
	Long createAppointment(AppointmentDto appointment);
	

	/**
	 * Update event.
	 *
	 * @param appointment the appointment
	 */
	public void updateEvent(AppointmentDto appointment) ;
	
	/**
	 * Cancel event.
	 *
	 * @param eventId the event id
	 */
	public void cancelEvent(Long eventId); 
	
}
