/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.auth.repo;

import java.math.BigInteger;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellme.auth.security.ApplicationUser;

/**
 * The Interface ApplicationUserRepo.
 */
public interface ApplicationUserRepo extends JpaRepository<ApplicationUser, BigInteger> {
	ApplicationUser findByUserName(String username);
}
