package com.wellme.patient.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;

import com.wellme.patient.model.Patient;
import com.wellme.patient.repo.PatientRepository;

public class PatientServiceImpl implements PatientService {
	
	@Autowired
	PatientRepository patientRepository;

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
		return patientRepository.findOne("Me");
	}

	@Override
	public Collection<Patient> findAll() {
		// TODO Auto-generated method stub
		return patientRepository.findAll();
	}

}
