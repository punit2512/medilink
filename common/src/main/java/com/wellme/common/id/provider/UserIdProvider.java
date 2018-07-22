///*
// * Copyright. Do not copy any portion of this file.
// */
//package com.wellme.common.id.provider;
//
//import java.math.BigInteger;
//
//import javax.inject.Named;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//
//import com.wellme.common.dao.sqeuence.IdSequenceProvider;
//import com.wellme.common.dao.sqeuence.SequenceIdSource;
//
///**
// * The Class PracticeIdProvider.
// */
//@Component
//public class UserIdProvider extends IdSequenceProvider<BigInteger> {
//	
//
//	/**
//	 * Instantiates a new patient id provider.
//	 *
//	 * @param sequenceIdSource the sequence id source
//	 * @param sequenceIdentifier the sequence identifier
//	 * @param threshold the threshold
//	 */
//	public UserIdProvider(
//			@Named("sequenceIdSourceMongo") SequenceIdSource<BigInteger> sequenceIdSource, 
//			@Value("${patient.id.sequence.name:user.seq}") String sequenceIdentifier, 
//			@Value("${patient.id.cache.size: 100}") int threshold,
//			@Value("${patient.id.cache.size: 100}") int cachedSeqSize) {
//		super(sequenceIdSource, sequenceIdentifier, threshold, cachedSeqSize);
//	}
//
//}
