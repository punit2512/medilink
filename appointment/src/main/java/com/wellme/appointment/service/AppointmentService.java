/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.service;

import java.util.List;
import java.util.Set;

import com.wellme.appointment.model.Appointment;
import com.wellme.common.model.PracticeConsultantKey;

/**
 * The Interface AppointmentService.
 */
public interface AppointmentService {
	
	/**
	 * Search by practice and consultants.
	 *
	 * @param keys the keys
	 * @return the list
	 */
	List<Appointment> searchByPracticeAndConsultants(Set<PracticeConsultantKey> keys);
	
	/**
	 * Creates the appointment.
	 *
	 * @param appointment the appointment
	 */
	void createAppointment(Appointment appointment);
}
