package com.wellme.practice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.InsuranceType;

public interface InsuranceTypesRepository extends MongoRepository<InsuranceType, String> {

}
