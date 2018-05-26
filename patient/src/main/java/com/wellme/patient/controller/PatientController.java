package com.wellme.patient.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.patient.model.Patient;
import com.wellme.patient.model.PreferredTime;
import com.wellme.patient.repo.PatientRepository;

@RestController
public class PatientController {
	
	@Autowired
	PatientRepository patientService;

	@RequestMapping("/addPatient")
	public void addPatient(){
		Patient patient = new Patient();
		patient.setFirstName("Patient");
		patient.setLastName("PatientLastName");
		List<Phone> phones = new ArrayList<>();
		Phone phone = new Phone();
		phone.setAreaCode("0124");
		phone.setCountryCode("+91");
		phone.setPhoneNumber("4382604");
		phone.setPhoneType("Home");
		phones.add(phone);
		patient.setPhones(phones);
		Address address = new Address();
		address.setAddressLine1("D-5/3 Second Floor");
		address.setAddressLine2("Ardee City");
		address.setArea("Sector 52");
		address.setCity("Gurgaon");
		address.setCountry("India");
		address.setState("Haryana");
		address.setZip("122011");
		patient.setAddresses(Collections.singletonList(address));
		PreferredTime preferredTime = new PreferredTime();
		preferredTime.setDay("*");
		preferredTime.setHour("*");
		preferredTime.setMinute("*");
		patient.setPreferredTimes(Collections.singletonList(preferredTime));
		patient.setEmails(Collections.singletonList("patient123@gmail.com"));
		patient.setUserName("patient123");
		patientService.save(patient);
	}
}
