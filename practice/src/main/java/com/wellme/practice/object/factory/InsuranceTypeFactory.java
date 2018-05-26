/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.object.factory;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.practice.id.generator.InsurancePlanIdProvider;
import com.wellme.practice.model.InsurancePlan;

/**
 * A factory for creating InsuranceType objects.
 */
@Component
public class InsuranceTypeFactory {
	
	/** The id provider. */
	@Autowired
	InsurancePlanIdProvider idProvider;
	
	/**
	 * Creates a new InsuranceType object.
	 *
	 * @param insuranceType the insurance type
	 * @param insuranceTypeDetails the insurance type details
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @return the insurance type
	 */
	public InsurancePlan createInsuranceType(String insuranceType, String insuranceTypeDetails, Date insTs, Date updTs, String insLogin, String updLogin){
		return new InsurancePlan(idProvider.getNextId(), insuranceType, insuranceTypeDetails, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE);
	}
}
