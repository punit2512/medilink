/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import java.math.BigInteger;

/**
 * The Class Institute.
 */
public class Institute {
	
	BigInteger instituteId;
	
	/** The institute name. */
	String instituteName;
	
	/** The university. */
	String university;
	
	/** The address. */
	Address address;
	
	/** The phone. */
	Phone phone;
	
	/**
	 * Instantiates a new institute.
	 *
	 * @param instituteName the institute name
	 * @param university the university
	 * @param address the address
	 * @param phone the phone
	 */
	public Institute(BigInteger instituteId, String instituteName, String university, Address address, Phone phone) {
		super();
		this.instituteId = instituteId;
		this.instituteName = instituteName;
		this.university = university;
		this.address = address;
		this.phone = phone;
	}
	
	/**
	 * Gets the institute name.
	 *
	 * @return the institute name
	 */
	public String getInstituteName() {
		return instituteName;
	}
	
	/**
	 * Sets the institute name.
	 *
	 * @param instituteName the new institute name
	 */
	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}
	
	/**
	 * Gets the address.
	 *
	 * @return the address
	 */
	public Address getAddress() {
		return address;
	}
	
	/**
	 * Sets the address.
	 *
	 * @param address the new address
	 */
	public void setAddress(Address address) {
		this.address = address;
	}
	
	/**
	 * Gets the phone.
	 *
	 * @return the phone
	 */
	public Phone getPhone() {
		return phone;
	}
	
	/**
	 * Sets the phone.
	 *
	 * @param phone the new phone
	 */
	public void setPhone(Phone phone) {
		this.phone = phone;
	}
	
	/**
	 * Gets the university.
	 *
	 * @return the university
	 */
	public String getUniversity() {
		return university;
	}
	
	/**
	 * Sets the university.
	 *
	 * @param university the new university
	 */
	public void setUniversity(String university) {
		this.university = university;
	}

	public BigInteger getInstituteId() {
		return instituteId;
	}

	public void setInstituteId(BigInteger instituteId) {
		this.instituteId = instituteId;
	}
}
