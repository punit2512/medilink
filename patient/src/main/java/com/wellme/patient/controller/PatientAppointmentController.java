/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.controller;

import java.math.BigDecimal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.patient.model.PatientAppointmentDto;
import com.wellme.patient.service.PatientAppointmentService;

/**
 * The Class PatientAppointmentController.
 */
@RestController
public class PatientAppointmentController {
	
	/** The patient appointment service. */
	@Autowired
	PatientAppointmentService patientAppointmentService;
	
	/**
	 * Book appointment.
	 *
	 * @param patientAppointment the patient appointment
	 * @param auth the auth
	 * @return the list
	 */
	@RequestMapping(value = "/secured/bookAppointment", method = RequestMethod.POST)
	@PreAuthorize("hasAuthority('PATIENT')")
	public void bookAppointment(@RequestBody PatientAppointmentDto patientAppointment, Authentication auth) {
		
		patientAppointmentService.bookAppointment(patientAppointment, "PUNIT");
	}

	/**
	 * Book appointment.
	 *
	 * @param patientAppointmentId the patient appointment id
	 * @param auth the auth
	 */
	@RequestMapping(value = "/secured/cancelAppointment", method = RequestMethod.POST)
	@PreAuthorize("hasAuthority('PATIENT')")
	public void bookAppointment(@RequestBody BigDecimal patientAppointmentId, Authentication auth) {
		
		patientAppointmentService.cancelAppointment(patientAppointmentId);
	}
	
	/**
	 * Update appointment.
	 *
	 * @param patientAppointment the patient appointment
	 * @param auth the auth
	 */
	@RequestMapping(value = "/secured/updateAppointment", method = RequestMethod.POST)
	@PreAuthorize("hasAuthority('PATIENT')")
	public void updateAppointment(@RequestBody PatientAppointmentDto patientAppointment, Authentication auth) {
		
		patientAppointmentService.updateAppointment(patientAppointment);
	}

}
