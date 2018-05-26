/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.Address;
import com.wellme.common.model.BaseVO;
import com.wellme.common.model.Phone;

// TODO: Auto-generated Javadoc
/**
 * The Class InsuranceProvider.
 */
@Document(collection="insuranceProviders")
public class InsuranceProvider  extends BaseVO{

	/** The insurance provider id. */
	@Id
	private BigInteger insuranceProviderId;
	
	/** The insurance provider name. */
	private String insuranceProviderName;
	
	/** The phone. */
	private Phone phone;
	
	/** The address. */
	private Address address;
	
	/** The insurance types. */
	private List<BigInteger> insuranceTypeIds;
	
	/**
	 * Instantiates a new insurance provider.
	 *
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 * @param insuranceProviderId the insurance provider id
	 * @param insuranceProviderName the insurance provider name
	 * @param phone the phone
	 * @param address the address
	 * @param insuranceTypeIds the insurance type ids
	 */
	public InsuranceProvider(BigInteger insuranceProviderId, String insuranceProviderName, Phone phone,
			Address address, List<BigInteger> insuranceTypeIds, Date insTs, Date updTs, String insLogin, String updLogin, long versionId,
			long previosVersionId) {
		super(insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.insuranceProviderId = insuranceProviderId;
		this.insuranceProviderName = insuranceProviderName;
		this.phone = phone;
		this.address = address;
		this.insuranceTypeIds = insuranceTypeIds;
	}
	
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
	 * Gets the insurance type ids.
	 *
	 * @return the insurance type ids
	 */
	public List<BigInteger> getInsuranceTypeIds() {
		return insuranceTypeIds;
	}

	/**
	 * Sets the insurance type ids.
	 *
	 * @param insuranceTypeIds the new insurance type ids
	 */
	public void setInsuranceTypeIds(List<BigInteger> insuranceTypeIds) {
		this.insuranceTypeIds = insuranceTypeIds;
	}
	
}
