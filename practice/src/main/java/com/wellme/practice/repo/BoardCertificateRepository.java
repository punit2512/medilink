package com.wellme.practice.repo;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.practice.model.BoardCertificate;

public interface BoardCertificateRepository extends MongoRepository<BoardCertificate, BigInteger> {

}
