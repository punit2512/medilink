package com.wellme.patient.model;

import java.util.List;

import org.springframework.data.annotation.Id;

import com.wellme.common.User;

public class Patient extends User{
	@Id
	private int patientId;
	private List<PreferredTime> preferredTimes;
	public int getPatientId() {
		return patientId;
	}
	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}
	public List<PreferredTime> getPreferredTimes() {
		return preferredTimes;
	}
	public void setPreferredTimes(List<PreferredTime> preferredTimes) {
		this.preferredTimes = preferredTimes;
	}
	
}
