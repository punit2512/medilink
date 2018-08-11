/*
 * Copyright. Do not copy any portion of this file.
 */
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
	 * @param firstName the first name
	 * @param lastName the last name
	 * @param middleName the middle name
	 * @param email the email
	 * @param phoneNumber the phone number
	 * @param gender the gender
	 */
	Patient createPatient(String userName, String firstName, String lastName, String middleName, String email, String phoneNumber, String gender, String password); 
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
