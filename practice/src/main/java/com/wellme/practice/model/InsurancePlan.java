/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.BaseVO;

/**
 * The Class InsurancePlan.
 */
@Document(collection="insurancePlans")
public class InsurancePlan  extends BaseVO{


	/** The insurance Plan id. */
	@Id 
	private BigInteger insurancePlanId;
	
	/** The insurance Plan. */
	private String insurancePlan;
	
	/** The insurance Plan details. */
	private String insurancePlanDetails;
	
	/**
	 * Instantiates a new insurance Plan.
	 *
	 * @param insurancePlanId the insurance Plan id
	 * @param insurancePlan the insurance Plan
	 * @param insurancePlanDetails the insurance Plan details
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 */
	public InsurancePlan(BigInteger insurancePlanId, String insurancePlan, String insurancePlanDetails, Date insTs, Date updTs, String insLogin, String updLogin, long versionId,
			long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.insurancePlanId = insurancePlanId;
		this.insurancePlan = insurancePlan;
		this.insurancePlanDetails = insurancePlanDetails;
	}	
	
	/**
	 * Gets the insurance Plan id.
	 *
	 * @return the insurance Plan id
	 */
	public BigInteger getInsurancePlanId() {
		return insurancePlanId;
	}
	
	/**
	 * Sets the insurance Plan id.
	 *
	 * @param insurancePlanId the new insurance Plan id
	 */
	public void setInsurancePlanId(BigInteger insurancePlanId) {
		this.insurancePlanId = insurancePlanId;
	}
	
	/**
	 * Gets the insurance Plan.
	 *
	 * @return the insurance Plan
	 */
	public String getInsurancePlan() {
		return insurancePlan;
	}
	
	/**
	 * Sets the insurance Plan.
	 *
	 * @param insurancePlan the new insurance Plan
	 */
	public void setInsurancePlan(String insurancePlan) {
		this.insurancePlan = insurancePlan;
	}
	
	/**
	 * Gets the insurance Plan details.
	 *
	 * @return the insurance Plan details
	 */
	public String getInsurancePlanDetails() {
		return insurancePlanDetails;
	}
	
	/**
	 * Sets the insurance Plan details.
	 *
	 * @param insurancePlanDetails the new insurance Plan details
	 */
	public void setInsurancePlanDetails(String insurancePlanDetails) {
		this.insurancePlanDetails = insurancePlanDetails;
	}
	
}
