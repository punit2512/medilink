package com.wellme.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.patient.model.PatientAppointmentDto;
import com.wellme.patient.service.PatientAppointmentService;

@RestController
public class PatientAppointmentController {
	
	@Autowired
	PatientAppointmentService patientAppointmentService;
	
	/**
	 * Search practices.
	 *
	 * @param request
	 *            the request
	 * @return the list
	 */
	@RequestMapping(value = "/bookAppointment", method = RequestMethod.POST)
	public void bookAppointment(@RequestBody PatientAppointmentDto patientAppointment) {
		
		patientAppointmentService.bookAppointment(patientAppointment, "PUNIT");
	}
}
