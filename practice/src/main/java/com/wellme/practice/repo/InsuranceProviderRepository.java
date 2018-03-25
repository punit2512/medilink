package com.wellme.practice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.InsuranceProvider;

public interface InsuranceProviderRepository extends MongoRepository<InsuranceProvider, String> {

}
