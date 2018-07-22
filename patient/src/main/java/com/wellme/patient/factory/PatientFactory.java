package com.wellme.patient.factory;

import java.math.BigInteger;
import java.util.Collections;
import java.util.Date;

import org.springframework.stereotype.Component;

import com.wellme.common.model.Phone;
import com.wellme.patient.model.Patient;

@Component
public class PatientFactory {

	
	public Patient createPatient(BigInteger id, String firstName, String lastName, String middleName, String email, String phoneNumber, String gender, Date insTs, String insLogin) {
		Phone phone = new Phone();
		phone.setCompletePhoneNumber(phoneNumber);
		return new Patient(id, null, firstName, lastName, middleName, null, Collections.singletonList(email), null, null, Collections.singletonList(phone), null, null, gender, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE, null);
	}
}
