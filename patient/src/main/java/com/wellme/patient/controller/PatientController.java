package com.wellme.patient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.patient.factory.PatientFactory;
import com.wellme.patient.repo.PatientDao;
import com.wellme.patient.repo.PatientRepository;

@RestController
public class PatientController {
	
	@Autowired
	PatientRepository patientRepo;
	
	@Autowired
	PatientDao patientDao;
	
	PatientFactory patientFactory;

	@RequestMapping("/patient/addPatient")
	//@PreAuthorize("hasAuthority('APP_ADMIN')")
	public void addPatient(Authentication auth){
		System.out.println("I am here");
//		patientRepo.save(patient);
	}
}
