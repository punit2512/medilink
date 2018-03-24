package com.wellme.practice.model;

import com.wellme.common.Qualification;
import com.wellme.common.User;

public class Consultant extends User{
	private Speciality[] specialities;
	private Qualification[] qualifications;
	public Speciality[] getSpecialities() {
		return specialities;
	}
	public void setSpecialities(Speciality[] specialities) {
		this.specialities = specialities;
	}
	public Qualification[] getQualifications() {
		return qualifications;
	}
	public void setQualifications(Qualification[] qualifications) {
		this.qualifications = qualifications;
	}
	
}
