package com.wellme.patient.repo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.wellme.patient.model.Patient;

@Component
public class PatientDao {
	/** The mongo template. */
	@Autowired
	private MongoOperations mongoOperations;
	
	public List<Patient> findByPatientDetails(String firstName, String lastName, String middleName, String phoneNumber, String email, String patientId){
		List<Patient> patientList = null;
		if(patientId != null) {
			Patient patient = mongoOperations.findById(patientId, Patient.class);
			if (patient != null) {
				patientList = new ArrayList<>();
				patientList.add(patient);
			}
		} else {
			Query query = new Query();
			if (firstName != null) {
				Criteria firstNameCriteria = Criteria.where("firstName").is(firstName);
				query.addCriteria(firstNameCriteria);
			} 
			if(lastName != null) {
				Criteria lastNameCriteria = Criteria.where("lastName").is(lastName);
				query.addCriteria(lastNameCriteria);
			}
			if(middleName != null) {
				Criteria middleNameCriteria = Criteria.where("middleName").is(middleName);
				query.addCriteria(middleNameCriteria);
			}
			if(email != null) {
				Criteria emailCriteria = Criteria.where("email").is(email);
				query.addCriteria(emailCriteria);
			}
			if(phoneNumber != null) {
				Criteria phoneNumberCriteria = Criteria.where("phone.completePhoneNumber").is(phoneNumber);
				query.addCriteria(phoneNumberCriteria);
			}
			patientList = mongoOperations.find(query, Patient.class);
		}
		return patientList;
	}
}
