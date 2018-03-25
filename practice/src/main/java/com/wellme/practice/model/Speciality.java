package com.wellme.practice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// TODO: Auto-generated Javadoc
/**
 * The Class Speciality.
 */
@Document(collection="speciality")
public class Speciality {
	
	/** The speciality id. */
	@Id
	private String specialityId;
	
	/** The speciality name. */
	private String specialityName;
	
	/** The speciality description. */
	private String specialityDescription;
	
	/**
	 * Gets the speciality id.
	 *
	 * @return the speciality id
	 */
	public String getSpecialityId() {
		return specialityId;
	}
	
	/**
	 * Sets the speciality id.
	 *
	 * @param specialityId the new speciality id
	 */
	public void setSpecialityId(String specialityId) {
		this.specialityId = specialityId;
	}
	
	/**
	 * Gets the speciality name.
	 *
	 * @return the speciality name
	 */
	public String getSpecialityName() {
		return specialityName;
	}
	
	/**
	 * Sets the speciality name.
	 *
	 * @param specialityName the new speciality name
	 */
	public void setSpecialityName(String specialityName) {
		this.specialityName = specialityName;
	}
	
	/**
	 * Gets the speciality description.
	 *
	 * @return the speciality description
	 */
	public String getSpecialityDescription() {
		return specialityDescription;
	}
	
	/**
	 * Sets the speciality description.
	 *
	 * @param specialityDescription the new speciality description
	 */
	public void setSpecialityDescription(String specialityDescription) {
		this.specialityDescription = specialityDescription;
	}
}
