/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.object.factory;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.common.model.SocialProfile;
import com.wellme.practice.id.generator.PracticeIdProvider;
import com.wellme.practice.model.Practice;

/**
 * A factory for creating Practice objects.
 */
@Component
public class PracticeFactory {
	
	/** The practice id provider. */
	@Autowired
	PracticeIdProvider idProvider;
	
	/**
	 * Creates a new Practice object.
	 *
	 * @param practiceName the practice name
	 * @param practiceDetails the practice details
	 * @param specialitiesSupported the specialities supported
	 * @param addresses the addresses
	 * @param phones the phones
	 * @param insuranceProviderIds the insurance provider ids
	 * @param consultantIds the consultant ids
	 * @param socialProfiles the social profiles
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previosVersionId the previos version id
	 * @return the practice
	 */
	public Practice createPractice(String practiceName, String practiceDetails, List<BigInteger> specialitiesSupported,
			List<Address> addresses, List<Phone> phones, List<BigInteger> insuranceProviderIds, List<BigInteger> consultantIds,
			List<SocialProfile> socialProfiles, BigInteger parentPracticeId, Address primaryAddress, Date insTs, Date updTs, String insLogin, String updLogin){
	
		return new Practice(idProvider.getNextId(), practiceName, practiceDetails, specialitiesSupported, addresses, phones, insuranceProviderIds, consultantIds, socialProfiles,
				parentPracticeId, primaryAddress, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE); 
	}
}
