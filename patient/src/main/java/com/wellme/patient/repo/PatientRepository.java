package com.wellme.patient.repo;

import java.math.BigDecimal;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.patient.model.Patient;

public interface PatientRepository extends MongoRepository<Patient, BigDecimal> {

}
