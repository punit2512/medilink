package com.wellme.practice.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="insuranceTypes")
public class InsuranceType {
	private int insuranceTypeId;
	private String insuranceType;
	private String insuranceTypeDetails;
	public int getInsuranceTypeId() {
		return insuranceTypeId;
	}
	public void setInsuranceTypeId(int insuranceTypeId) {
		this.insuranceTypeId = insuranceTypeId;
	}
	public String getInsuranceType() {
		return insuranceType;
	}
	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}
	public String getInsuranceTypeDetails() {
		return insuranceTypeDetails;
	}
	public void setInsuranceTypeDetails(String insuranceTypeDetails) {
		this.insuranceTypeDetails = insuranceTypeDetails;
	}
	
}
