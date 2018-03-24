package com.wellme.practice.model;

import com.wellme.common.Address;
import com.wellme.common.Phone;

public class InsuranceProvider {
	private int insuranceProviderId;
	private String insuranceProviderName;
	private Phone phone;
	private Address address;
	private InsuranceType[] insuranceTypes;
	public int getInsuranceProviderId() {
		return insuranceProviderId;
	}
	public void setInsuranceProviderId(int insuranceProviderId) {
		this.insuranceProviderId = insuranceProviderId;
	}
	public String getInsuranceProviderName() {
		return insuranceProviderName;
	}
	public void setInsuranceProviderName(String insuranceProviderName) {
		this.insuranceProviderName = insuranceProviderName;
	}
	public Phone getPhone() {
		return phone;
	}
	public void setPhone(Phone phone) {
		this.phone = phone;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public InsuranceType[] getInsuranceTypes() {
		return insuranceTypes;
	}
	public void setInsuranceTypes(InsuranceType[] insuranceTypes) {
		this.insuranceTypes = insuranceTypes;
	}
}
