package com.wellme.patient.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.patient.factory.PatientFactory;
import com.wellme.patient.model.Patient;
import com.wellme.patient.repo.PatientDao;
import com.wellme.patient.repo.PatientRepository;

@RestController
public class PatientController {
	
	@Autowired
	PatientRepository patientRepo;
	
	@Autowired
	PatientDao patientDao;
	
	PatientFactory patientFactory;

	@RequestMapping("/addPatient")
	public void addPatient(){
		Patient patient = patientFactory.createPatient("John", "Martin", null, "jmartin@gmail.com", "+001-617-287-2718", "MALE", new Date(), "PUNIT");
		patientRepo.save(patient);
	}
}
