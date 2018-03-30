package com.wellme.practice.model;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.Address;
import com.wellme.common.BaseVO;
import com.wellme.common.Phone;

// TODO: Auto-generated Javadoc
/**
 * The Class InsuranceProvider.
 */
@Document(collection="insuranceProviders")
public class InsuranceProvider  extends BaseVO{
	
	/** The insurance provider id. */
	@Id
	private String insuranceProviderId;
	
	/** The insurance provider name. */
	private String insuranceProviderName;
	
	/** The phone. */
	private Phone phone;
	
	/** The address. */
	private Address address;
	
	/** The insurance types. */
	@DBRef(db="insuranceTypes")
	private List<InsuranceType> insuranceTypes;
	
	/**
	 * Gets the insurance provider id.
	 *
	 * @return the insurance provider id
	 */
	public String getInsuranceProviderId() {
		return insuranceProviderId;
	}
	
	/**
	 * Sets the insurance provider id.
	 *
	 * @param insuranceProviderId the new insurance provider id
	 */
	public void setInsuranceProviderId(String insuranceProviderId) {
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
	 * Gets the insurance types.
	 *
	 * @return the insurance types
	 */
	public List<InsuranceType> getInsuranceTypes() {
		return insuranceTypes;
	}
	
	/**
	 * Sets the insurance types.
	 *
	 * @param insuranceTypes the new insurance types
	 */
	public void setInsuranceTypes(List<InsuranceType> insuranceTypes) {
		this.insuranceTypes = insuranceTypes;
	}
}
