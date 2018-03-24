package com.wellme.patient.service;

import java.util.Collection;

import com.wellme.patient.model.Patient;

// TODO: Auto-generated Javadoc
/**
 * The Interface PatientService.
 */
public interface PatientService {
	
	/**
	 * Creates the patient.
	 *
	 * @param patient the patient
	 */
	void createPatient(Patient patient);
	
	/**
	 * Update patient.
	 *
	 * @param patient the patient
	 */
	void updatePatient(Patient patient);
	
	/**
	 * Delete patient.
	 *
	 * @param patient the patient
	 */
	void deletePatient(Patient patient);
	
	/**
	 * Find patient.
	 *
	 * @param patient the patient
	 * @return the patient
	 */
	Patient findPatient(Patient patient);
	
	/**
	 * Find all.
	 *
	 * @return the collection
	 */
	Collection<Patient> findAll();
}
