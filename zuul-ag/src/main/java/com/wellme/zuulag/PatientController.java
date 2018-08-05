package com.wellme.zuulag;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {
	

	@RequestMapping("/add")
	public void addPatient(){
//		patientRepo.save(patient);
	}
}
