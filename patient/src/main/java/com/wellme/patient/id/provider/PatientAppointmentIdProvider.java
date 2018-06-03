/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.id.provider;

import java.math.BigInteger;

import javax.inject.Named;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.wellme.common.dao.sqeuence.IdSequenceProvider;
import com.wellme.common.dao.sqeuence.SequenceIdSource;

/**
 * The Class PracticeIdProvider.
 */
@Component
public class PatientAppointmentIdProvider extends IdSequenceProvider<BigInteger> {
	

	/**
	 * Instantiates a new patient id provider.
	 *
	 * @param sequenceIdSource the sequence id source
	 * @param sequenceIdentifier the sequence identifier
	 * @param threshold the threshold
	 */
	public PatientAppointmentIdProvider(
			@Named("sequenceIdSourceMongo") SequenceIdSource<BigInteger> sequenceIdSource, 
			@Value("${patientAppointment.id.sequence.name:patientAppointment.seq}") String sequenceIdentifier, 
			@Value("${patientAppointment.id.cache.size: 100}") int threshold,
			@Value("${patientAppointment.id.cache.size: 100}") int cachedSeqSize) {
		super(sequenceIdSource, sequenceIdentifier, threshold, cachedSeqSize);
	}

}
