package com.wellme.patient.service;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.wellme.common.CommonConstants;
import com.wellme.common.model.ApplicationUser;
import com.wellme.common.model.Authority;
import com.wellme.patient.factory.PatientFactory;
import com.wellme.patient.model.Patient;
import com.wellme.patient.repo.PatientRepository;

@Component
public class PatientServiceImpl implements PatientService {
	
	@Autowired
	PatientRepository patientRepository;
	
	/** The appointment search SQL. */
	@Value("${user.service.url}")
	String userServiceURL;
	
	@Autowired
	RestTemplate restTemplate;
	
	@Autowired
	PatientFactory patientFactory;

	@Override
	public Patient createPatient(String firstName, String lastName, String middleName, String email, String phoneNumber, String gender) {

		ApplicationUser appUserIn = new ApplicationUser(email, true, CommonConstants.DEFAULT_PASSWORD, Collections.singletonList(new Authority("PATIENT")));
		
		ResponseEntity<ApplicationUser> userResponse = restTemplate.postForEntity(userServiceURL, appUserIn, ApplicationUser.class);
		ApplicationUser appUser = userResponse.getBody();
		
		Patient patient = patientFactory.createPatient(appUser.getUserId(), firstName, lastName, middleName, email, phoneNumber, gender, new Date(), "APP");
		
		patientRepository.save(patient);
		
		return patient;

	}
	
	/**
	 * Creates the patient.
	 *
	 * @param patient the patient
	 */
	@Override
	public void createPatient(Patient patient) {
		patientRepository.save(patient);
	}

	@Override
	public void updatePatient(Patient patient) {
		patientRepository.save(patient);

	}

	@Override
	public void deletePatient(Patient patient) {
		patientRepository.delete(patient);

	}

	@Override
	public Patient findPatient(Patient patient) {
		return null;
	}

	@Override
	public Collection<Patient> findAll() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}

}
