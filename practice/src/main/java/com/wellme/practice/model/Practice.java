package com.wellme.practice.model;

import com.wellme.common.Address;
import com.wellme.common.Phone;

public class Practice {
	private int practiceId;
	private String practiveName;
	private String practiceDetails;
	private Speciality[] specialitiesSupported;
	private Address[] addresses;
	private Phone[] phones;
	private InsuranceProvider[] insuranceProviders;
	private Consultant[] consultants;
	public int getPracticeId() {
		return practiceId;
	}
	public void setPracticeId(int practiceId) {
		this.practiceId = practiceId;
	}
	public String getPractiveName() {
		return practiveName;
	}
	public void setPractiveName(String practiveName) {
		this.practiveName = practiveName;
	}
	public String getPracticeDetails() {
		return practiceDetails;
	}
	public void setPracticeDetails(String practiceDetails) {
		this.practiceDetails = practiceDetails;
	}
	public Speciality[] getSpecialitiesSupported() {
		return specialitiesSupported;
	}
	public void setSpecialitiesSupported(Speciality[] specialitiesSupported) {
		this.specialitiesSupported = specialitiesSupported;
	}
	public Address[] getAddresses() {
		return addresses;
	}
	public void setAddresses(Address[] addresses) {
		this.addresses = addresses;
	}
	public Phone[] getPhones() {
		return phones;
	}
	public void setPhones(Phone[] phones) {
		this.phones = phones;
	}
	public InsuranceProvider[] getInsuranceProviders() {
		return insuranceProviders;
	}
	public void setInsuranceProviders(InsuranceProvider[] insuranceProviders) {
		this.insuranceProviders = insuranceProviders;
	}
	public Consultant[] getConsultants() {
		return consultants;
	}
	public void setConsultants(Consultant[] consultants) {
		this.consultants = consultants;
	}
	
	
}
