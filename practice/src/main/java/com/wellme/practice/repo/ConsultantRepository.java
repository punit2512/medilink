package com.wellme.practice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.Consultant;

public interface ConsultantRepository extends MongoRepository<Consultant, String> {

}
