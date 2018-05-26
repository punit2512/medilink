/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.object.factory;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.practice.id.generator.BoardCertificateIdProvider;
import com.wellme.practice.model.BoardCertificate;

/**
 * A factory for creating BoardCertificate objects.
 */
@Component
public class BoardCertificateFactory {
	
	/** The id provider. */
	@Autowired
	BoardCertificateIdProvider idProvider;
	
	/**
	 * Creates a new BoardCertificate object.
	 *
	 * @param certificate the certificate
	 * @param speciality the speciality
	 * @param subSpeciality the sub speciality
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @return the board certificate
	 */
	public BoardCertificate createBoardCertificate(String certificate, String speciality, String subSpeciality, Date insTs, Date updTs, String insLogin, String updLogin){
		return new BoardCertificate(idProvider.getNextId(), certificate, speciality, subSpeciality, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE);
	}
	
	/**
	 * Update board certificate.
	 *
	 * @return the board certificate
	 */
	public BoardCertificate updateBoardCertificate(){
		return null;
	}
}
