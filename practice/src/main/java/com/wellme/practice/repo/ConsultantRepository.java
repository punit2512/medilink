package com.wellme.practice.repo;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.Consultant;

public interface ConsultantRepository extends MongoRepository<Consultant, BigInteger> {

}
