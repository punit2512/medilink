/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.id.generator;

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
public class SpecialityIdProvider extends IdSequenceProvider<BigInteger> {
	

	/**
	 * Instantiates a new practice id provider.
	 *
	 * @param sequenceIdSource the sequence id source
	 * @param sequenceIdentifier the sequence identifier
	 * @param threshold the threshold
	 * @param cachedSeqSize the cached seq size
	 */
	public SpecialityIdProvider(
			@Named("sequenceIdSourceMongo") SequenceIdSource<BigInteger> sequenceIdSource, 
			@Value("${speciality.id.sequence.name:speciality.seq}")String sequenceIdentifier, 
			@Value("${speciality.id.cache.size: 100}") int threshold,
			@Value("${speciality.id.cache.size: 100}") int cachedSeqSize) {
		super(sequenceIdSource, sequenceIdentifier, threshold, cachedSeqSize);
	}

}
