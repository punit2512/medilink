package com.wellme.patient.service;

import com.wellme.patient.model.PatientAppointmentDto;

public interface PatientAppointmentService {
	void bookAppointment(PatientAppointmentDto patientAppointment, String insLogin);
}
