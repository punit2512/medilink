package com.wellme.patient.service;

import java.math.BigDecimal;

import com.wellme.patient.model.PatientAppointmentDto;

public interface PatientAppointmentService {
	void bookAppointment(PatientAppointmentDto patientAppointment, String insLogin);
	
	/**
	 * Cancel appointment.
	 *
	 * @param patientAppointmentId the patient appointment id
	 */
	public void cancelAppointment(BigDecimal patientAppointmentId) ;
	
	
	/**
	 * Update appointment.
	 *
	 * @param patientAppointmentDto the patient appointment dto
	 */
	public void updateAppointment(PatientAppointmentDto patientAppointmentDto); 
	
}
