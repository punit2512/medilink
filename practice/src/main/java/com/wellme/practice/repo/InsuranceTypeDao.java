/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.repo;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.InsurancePlan;
import com.wellme.practice.model.SearchConsultantDataContext;

/**
 * The Class InsuranceTypeDao.
 */
@Component
 
public class InsuranceTypeDao {
	/** The mongo template. */
	@Autowired
	private MongoOperations mongoOperations;
	
	/**
	 * Search insurance providers.
	 *
	 * @param request the request
	 * @param context the context
	 * @return the list
	 */
	public List<InsurancePlan> searchInsuranceTypes(SearchConsultantsRequest request, SearchConsultantDataContext context){
		Map<BigInteger, InsurancePlan> insuranceTypeMap = new HashMap<>();
		Query query = new Query();
		if(request.getInsuranceType() != null){
			Criteria nameCriteria = Criteria.where("insurancePlan").regex(request.getInsuranceType());
			query.addCriteria(nameCriteria);
			List<InsurancePlan> insuranceTypes = mongoOperations.find(query,InsurancePlan.class);
			insuranceTypes.stream().map(it -> insuranceTypeMap.put(it.getInsurancePlanId(), it)).count();
			context.setInsurancePlans(insuranceTypeMap);
			return insuranceTypes;
		}
		return null;
	}
	
	/**
	 * Gets the by ids.
	 *
	 * @param insuranceTypeIds the insurance type ids
	 * @return the by ids
	 */
	public Map<BigInteger, InsurancePlan> getByIds(List<BigInteger> insuranceTypeIds){
		Map<BigInteger, InsurancePlan> insuranceTypeMap = new HashMap<>();
		Query query = new Query();
		Criteria idsCriteria = Criteria.where("insurancePlanId").in(insuranceTypeIds);
		query.addCriteria(idsCriteria);
		List<InsurancePlan> insuranceTypes = mongoOperations.find(query, InsurancePlan.class);
		insuranceTypes.stream().map(it -> insuranceTypeMap.put(it.getInsurancePlanId(), it)).count();
		return insuranceTypeMap;
	}
}
