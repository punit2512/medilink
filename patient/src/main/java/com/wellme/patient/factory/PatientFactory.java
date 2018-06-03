package com.wellme.patient.factory;

import java.util.Collections;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;

import com.wellme.common.model.Phone;
import com.wellme.patient.id.provider.PatientIdProvider;
import com.wellme.patient.model.Patient;

public class PatientFactory {

	@Autowired
	PatientIdProvider idProvider;
	
	public Patient createPatient(String firstName, String lastName, String middleName, String email, String phoneNumber, String gender, Date insTs, String insLogin) {
		Phone phone = new Phone();
		phone.setCompletePhoneNumber(phoneNumber);
		return new Patient(idProvider.getNextId(), null, firstName, lastName, middleName, null, Collections.singletonList(email), null, null, Collections.singletonList(phone), null, null, gender, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE, null);
	}
}
