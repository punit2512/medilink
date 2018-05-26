/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.repo;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.InsuranceProvider;
import com.wellme.practice.model.SearchConsultantDataContext;

/**
 * The Class InsuranceProviderDao.
 */
@Component
public class InsuranceProviderDao {
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
	public List<InsuranceProvider> searchInsuranceProviders(SearchConsultantsRequest request, SearchConsultantDataContext context){
		Map<BigInteger, InsuranceProvider> insuranceProviderMap = new HashMap<>();
		Set<BigInteger> insuranceTypeIds = MapUtils.isNotEmpty(context.getInsurancePlans()) ? context.getInsurancePlans().keySet() : null;
		Query query = new Query();
		if(request.getInsuranceProvider() != null){
			Criteria nameCriteria = Criteria.where("insuranceProviderName").regex(request.getInsuranceProvider());
			query.addCriteria(nameCriteria);
		}
		if(CollectionUtils.isNotEmpty(insuranceTypeIds)){
			Criteria insuranceTypeIdsCriteria = Criteria.where("insuranceTypeIds").in(insuranceTypeIds);
			query.addCriteria(insuranceTypeIdsCriteria);
		}
		List<InsuranceProvider> insuranceProviders = mongoOperations.find(query,InsuranceProvider.class);
		insuranceProviders.stream().map(ip -> insuranceProviderMap.put(ip.getInsuranceProviderId(), ip)).count();
		context.setInsuranceProvdiers(insuranceProviderMap);
		return insuranceProviders;
	}
	
	/**
	 * Gets the by ids.
	 *
	 * @param insuranceProviderIds the insurance provider ids
	 * @return the by ids
	 */
	public Map<BigInteger, InsuranceProvider> getByIds(List<BigInteger> insuranceProviderIds){
		Map<BigInteger, InsuranceProvider> insuranceProviderMap = new HashMap<>();
		Query query = new Query();
		Criteria idsCriteria = Criteria.where("insuranceProviderId").in(insuranceProviderIds);
		query.addCriteria(idsCriteria);
		List<InsuranceProvider> insuranceProviders = mongoOperations.find(query, InsuranceProvider.class);
		insuranceProviders.stream().map(it -> insuranceProviderMap.put(it.getInsuranceProviderId(), it)).count();
		return insuranceProviderMap;
	}
}
