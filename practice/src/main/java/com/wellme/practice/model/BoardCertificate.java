/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.BaseVO;

/**
 * The Class BoardCertificate.
 */
@Document(collection="boardCertificates")
public class BoardCertificate extends BaseVO{
	
	/** The id. */
	@Id
	private BigInteger id;
	
	/** The certificate. */
	private String certificate;
	
	/** The speciality. */
	private String speciality;
	
	/** The sub speciality. */
	private String subSpeciality;
	
	/**
	 * Instantiates a new board certificate.
	 *
	 * @param id the id
	 * @param certificate the certificate
	 * @param speciality the speciality
	 * @param subSpeciality the sub speciality
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public BoardCertificate(BigInteger id, String certificate, String speciality, String subSpeciality, Date insTs, Date updTs, String insLogin, String updLogin, long versionId,
			long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.id = id;
		this.certificate = certificate;
		this.speciality = speciality;
		this.subSpeciality = subSpeciality;
	}
	
	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public BigInteger getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(BigInteger id) {
		this.id = id;
	}

	/**
	 * Gets the certificate.
	 *
	 * @return the certificate
	 */
	public String getCertificate() {
		return certificate;
	}
	
	/**
	 * Sets the certificate.
	 *
	 * @param certificate the new certificate
	 */
	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}
	
	/**
	 * Gets the speciality.
	 *
	 * @return the speciality
	 */
	public String getSpeciality() {
		return speciality;
	}
	
	/**
	 * Sets the speciality.
	 *
	 * @param speciality the new speciality
	 */
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	/**
	 * Gets the sub speciality.
	 *
	 * @return the sub speciality
	 */
	public String getSubSpeciality() {
		return subSpeciality;
	}
	
	/**
	 * Sets the sub speciality.
	 *
	 * @param subSpeciality the new sub speciality
	 */
	public void setSubSpeciality(String subSpeciality) {
		this.subSpeciality = subSpeciality;
	}
	
}
