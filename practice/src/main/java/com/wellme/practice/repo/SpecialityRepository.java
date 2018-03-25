package com.wellme.practice.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.Speciality;

public interface SpecialityRepository extends MongoRepository<Speciality, String> {

}
