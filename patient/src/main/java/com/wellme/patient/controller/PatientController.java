package com.wellme.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.patient.model.Patient;
import com.wellme.patient.model.PatientSignupDto;
import com.wellme.patient.service.PatientService;

@RestController
public class PatientController {
	
	@Autowired
	PatientService patientService;

	
	@RequestMapping("/signup")
	public Patient patientSignup(@RequestBody PatientSignupDto signupDto) {
		Patient patient = patientService.createPatient(signupDto.getUserName(), signupDto.getFirstName(), signupDto.getLastName(), signupDto.getMiddleName(), signupDto.getEmail(), signupDto.getPhoneNumber(), signupDto.getGender(), signupDto.getPassword());
		return patient;
	}
}
