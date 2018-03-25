package com.wellme.patient.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.User;

// TODO: Auto-generated Javadoc
/**
 * The Class Patient.
 */
@Document(collection="patients")
public class Patient extends User{
	
	/** The patient id. */
	@Id
	private int patientId;
	
	/** The preferred times. */
	private List<PreferredTime> preferredTimes;
	
	/**
	 * Gets the patient id.
	 *
	 * @return the patient id
	 */
	public int getPatientId() {
		return patientId;
	}
	
	/**
	 * Sets the patient id.
	 *
	 * @param patientId the new patient id
	 */
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	
	/**
	 * Gets the preferred times.
	 *
	 * @return the preferred times
	 */
	public List<PreferredTime> getPreferredTimes() {
		return preferredTimes;
	}
	
	/**
	 * Sets the preferred times.
	 *
	 * @param preferredTimes the new preferred times
	 */
	public void setPreferredTimes(List<PreferredTime> preferredTimes) {
		this.preferredTimes = preferredTimes;
	}
	
}
