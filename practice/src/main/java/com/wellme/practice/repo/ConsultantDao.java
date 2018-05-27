/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.repo;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.HashSet;
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
import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.SearchConsultantDataContext;

/**
 * The Class ConsultantDao.
 */
@Component
public class ConsultantDao {

	/** The mongo template. */
	@Autowired
	private MongoOperations mongoOperations;

	/**
	 * Search consultants.
	 *
	 * @param searchRequest the search request
	 * @param context the context
	 * @return the list
	 */
	public List<Consultant> searchConsultants(SearchConsultantsRequest searchRequest,
			SearchConsultantDataContext context) {
		Map<BigInteger, Consultant> consultantsMap = new HashMap<>();
		Set<BigInteger> specialityIds = new HashSet<>();
		if(MapUtils.isNotEmpty(context.getSpecialities())){
			specialityIds = context.getSpecialities().keySet();
		}
		Query query = new Query();
		if (searchRequest.getConsultantName() != null) {
			Criteria consultantNameCriteria = Criteria.where("userFullName")
					.regex(searchRequest.getConsultantName());
			query.addCriteria(consultantNameCriteria);
		}
		if (CollectionUtils.isNotEmpty(specialityIds)) {
			Criteria specialityNameCriteria = Criteria.where("specialityIds").in(specialityIds);
			query.addCriteria(specialityNameCriteria);
		}
		List<Consultant> consultants = mongoOperations.find(query, Consultant.class);
		consultants.stream().map(c -> consultantsMap.put(c.getConsultantId(), c)).count();
		context.setConsultants(consultantsMap);
		return consultants;
	}

	/**
	 * Gets the by ids.
	 *
	 * @param consultantIds the consultant ids
	 * @return the by ids
	 */
	public Map<BigInteger, Consultant> getByIds(List<BigInteger> consultantIds) {
		Map<BigInteger, Consultant> consultantsMap = new HashMap<>();
		Query query = new Query();
		Criteria consultantNameCriteria = Criteria.where("consultantId").in(consultantIds);
		query.addCriteria(consultantNameCriteria);

		List<Consultant> consultants = mongoOperations.find(query, Consultant.class);
		consultants.stream().map(c -> consultantsMap.put(c.getConsultantId(), c)).count();
		return consultantsMap;
	}
}
