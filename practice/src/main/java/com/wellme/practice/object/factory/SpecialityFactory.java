/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.object.factory;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.practice.id.generator.SpecialityIdProvider;
import com.wellme.practice.model.Speciality;

/**
 * A factory for creating Speciality objects.
 */
@Component
public class SpecialityFactory {
	
	/** The id provider. */
	@Autowired
	SpecialityIdProvider idProvider;
	
	/**
	 * Creates a new Speciality object.
	 *
	 * @param specialityName the speciality name
	 * @param specialityDescription the speciality description
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @return the speciality
	 */
	public Speciality createSpeciality(String specialityName, String specialityDescription, Date insTs, Date updTs, String insLogin, String updLogin){
		return new Speciality(idProvider.getNextId(), specialityName, specialityDescription, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE);
	}
}
