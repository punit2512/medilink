/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.BaseVO;

/**
 * The Class InsuranceType.
 */
@Document(collection="insuranceTypes")
public class InsuranceType  extends BaseVO{
	
	/** The insurance type id. */
	@Id 
	private String insuranceTypeId;
	
	/** The insurance type. */
	private String insuranceType;
	
	/** The insurance type details. */
	private String insuranceTypeDetails;
	
	/**
	 * Gets the insurance type id.
	 *
	 * @return the insurance type id
	 */
	public String getInsuranceTypeId() {
		return insuranceTypeId;
	}
	
	/**
	 * Sets the insurance type id.
	 *
	 * @param insuranceTypeId the new insurance type id
	 */
	public void setInsuranceTypeId(String insuranceTypeId) {
		this.insuranceTypeId = insuranceTypeId;
	}
	
	/**
	 * Gets the insurance type.
	 *
	 * @return the insurance type
	 */
	public String getInsuranceType() {
		return insuranceType;
	}
	
	/**
	 * Sets the insurance type.
	 *
	 * @param insuranceType the new insurance type
	 */
	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}
	
	/**
	 * Gets the insurance type details.
	 *
	 * @return the insurance type details
	 */
	public String getInsuranceTypeDetails() {
		return insuranceTypeDetails;
	}
	
	/**
	 * Sets the insurance type details.
	 *
	 * @param insuranceTypeDetails the new insurance type details
	 */
	public void setInsuranceTypeDetails(String insuranceTypeDetails) {
		this.insuranceTypeDetails = insuranceTypeDetails;
	}
	
}
