/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Map;

/**
 * The Class SearchPracticeRequestContext.
 */
public class SearchConsultantDataContext {
	
	/** The specialities. */
	Map<BigInteger, Speciality> specialities;
	
	/** The consultants. */
	Map<BigInteger, Consultant> consultants;
	
	/** The practices. */
	Map<BigInteger, Practice> practices;
	
	/** The insurance provdiers. */
	Map<BigInteger, InsuranceProvider> insuranceProvdiers;
	
	/** The insurance types. */
	Map<BigInteger, InsurancePlan> insurancePlans;
	
	/** The board certificates. */
	Map<BigInteger, BoardCertificate> boardCertificates;
	
	//Map<BigInteger, Appointment> appointmentsByConsultant;
	
	/**
	 * Gets the specialities.
	 *
	 * @return the specialities
	 */
	public Map<BigInteger, Speciality> getSpecialities() {
		return specialities;
	}
	
	/**
	 * Sets the specialities.
	 *
	 * @param specialities the specialities
	 */
	public void setSpecialities(Map<BigInteger, Speciality> specialities) {
		this.specialities = specialities;
	}
	
	/**
	 * Gets the consultants.
	 *
	 * @return the consultants
	 */
	public Map<BigInteger, Consultant> getConsultants() {
		return consultants;
	}
	
	/**
	 * Sets the consultants.
	 *
	 * @param consultants the consultants
	 */
	public void setConsultants(Map<BigInteger, Consultant> consultants) {
		this.consultants = consultants;
	}
	
	/**
	 * Gets the practices.
	 *
	 * @return the practices
	 */
	public Map<BigInteger, Practice> getPractices() {
		return practices;
	}
	
	/**
	 * Sets the practices.
	 *
	 * @param practices the practices
	 */
	public void setPractices(Map<BigInteger, Practice> practices) {
		this.practices = practices;
	}
	
	/**
	 * Gets the insurance provdiers.
	 *
	 * @return the insurance provdiers
	 */
	public Map<BigInteger, InsuranceProvider> getInsuranceProvdiers() {
		return insuranceProvdiers;
	}
	
	/**
	 * Sets the insurance provdiers.
	 *
	 * @param insuranceProvdiers the insurance provdiers
	 */
	public void setInsuranceProvdiers(Map<BigInteger, InsuranceProvider> insuranceProvdiers) {
		this.insuranceProvdiers = insuranceProvdiers;
	}
	
	/**
	 * Gets the insurance types.
	 *
	 * @return the insurance types
	 */
	public Map<BigInteger, InsurancePlan> getInsurancePlans() {
		return insurancePlans;
	}
	
	/**
	 * Sets the insurance types.
	 *
	 * @param insurancePlans the insurance plans
	 */
	public void setInsurancePlans(Map<BigInteger, InsurancePlan> insurancePlans) {
		this.insurancePlans = insurancePlans;
	}

	/**
	 * Gets the board certificates.
	 *
	 * @return the board certificates
	 */
	public Map<BigInteger, BoardCertificate> getBoardCertificates() {
		return boardCertificates;
	}

	/**
	 * Sets the board certificates.
	 *
	 * @param boardCertificates the board certificates
	 */
	public void setBoardCertificates(Map<BigInteger, BoardCertificate> boardCertificates) {
		this.boardCertificates = boardCertificates;
	}
}
