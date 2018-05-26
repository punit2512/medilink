/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.wellme.common.model.BaseVO;

/**
 * The Class InsuranceProviderDto.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class InsuranceProviderDto extends BaseVO{
	
	/** The insurance provider id. */
	private BigInteger insuranceProviderId;
	
	/** The insurance provider name. */
	private String insuranceProviderName;
	
	/** The insurance types. */
	private List<String> insuranceTypes;
	
	/**
	 * Gets the insurance provider id.
	 *
	 * @return the insurance provider id
	 */
	public BigInteger getInsuranceProviderId() {
		return insuranceProviderId;
	}
	
	/**
	 * Sets the insurance provider id.
	 *
	 * @param insuranceProviderId the new insurance provider id
	 */
	public void setInsuranceProviderId(BigInteger insuranceProviderId) {
		this.insuranceProviderId = insuranceProviderId;
	}
	
	/**
	 * Gets the insurance provider name.
	 *
	 * @return the insurance provider name
	 */
	public String getInsuranceProviderName() {
		return insuranceProviderName;
	}
	
	/**
	 * Sets the insurance provider name.
	 *
	 * @param insuranceProviderName the new insurance provider name
	 */
	public void setInsuranceProviderName(String insuranceProviderName) {
		this.insuranceProviderName = insuranceProviderName;
	}
	
	/**
	 * Gets the insurance types.
	 *
	 * @return the insurance types
	 */
	public List<String> getInsuranceTypes() {
		return insuranceTypes;
	}
	
	/**
	 * Sets the insurance types.
	 *
	 * @param insuranceTypes the new insurance types
	 */
	public void setInsuranceTypes(List<String> insuranceTypes) {
		this.insuranceTypes = insuranceTypes;
	}
}
