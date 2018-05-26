/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.BaseVO;

// TODO: Auto-generated Javadoc
/**
 * The Class Speciality.
 */
@Document(collection="specialities")
public class Speciality  extends BaseVO{


	/** The speciality id. */
	@Id
	private BigInteger specialityId;
	
	/** The speciality name. */
	private String specialityName;
	
	/** The speciality description. */
	private String specialityDescription;
	
	
	/**
	 * Instantiates a new speciality.
	 *
	 * @param specialityId the speciality id
	 * @param specialityName the speciality name
	 * @param specialityDescription the speciality description
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public Speciality(BigInteger specialityId, String specialityName, String specialityDescription, Date insTs, Date updTs, String insLogin, String updLogin, long versionId, long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.specialityId = specialityId;
		this.specialityName = specialityName;
		this.specialityDescription = specialityDescription;
	}
	
	/**
	 * Gets the speciality id.
	 *
	 * @return the speciality id
	 */
	public BigInteger getSpecialityId() {
		return specialityId;
	}
	
	/**
	 * Sets the speciality id.
	 *
	 * @param specialityId the new speciality id
	 */
	public void setSpecialityId(BigInteger specialityId) {
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
