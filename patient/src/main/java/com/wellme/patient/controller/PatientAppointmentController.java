package com.wellme.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
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
	@RequestMapping(value = "/secured/bookAppointment", method = RequestMethod.POST)
	@PreAuthorize("hasAuthority('PATIENT')")
	public void bookAppointment(@RequestBody PatientAppointmentDto patientAppointment, Authentication auth) {
		
		patientAppointmentService.bookAppointment(patientAppointment, "PUNIT");
	}
}
