package com.wellme.practice.model;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.Qualification;
import com.wellme.common.User;

// TODO: Auto-generated Javadoc
/**
 * The Class Consultant.
 */
@Document(collection="consultants")
public class Consultant extends User{
	
	/** The specialities. */
	@DBRef(db="specialities")
	private List<Speciality> specialities;
	
	/** The qualifications. */
	private List<Qualification> qualifications;
	
	/**
	 * Gets the specialities.
	 *
	 * @return the specialities
	 */
	public List<Speciality> getSpecialities() {
		return specialities;
	}
	
	/**
	 * Sets the specialities.
	 *
	 * @param specialities the new specialities
	 */
	public void setSpecialities(List<Speciality> specialities) {
		this.specialities = specialities;
	}
	
	/**
	 * Gets the qualifications.
	 *
	 * @return the qualifications
	 */
	public List<Qualification> getQualifications() {
		return qualifications;
	}
	
	/**
	 * Sets the qualifications.
	 *
	 * @param qualifications the new qualifications
	 */
	public void setQualifications(List<Qualification> qualifications) {
		this.qualifications = qualifications;
	}
	
}
