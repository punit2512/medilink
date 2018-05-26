/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.repo;

import java.math.BigInteger;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.SearchConsultantDataContext;

/**
 * The Class PracticeDao.
 */
@Component
public class PracticeDao {

	/** The mongo template. */
	@Autowired
	private MongoOperations mongoOperations;

	/**
	 * Search practices.
	 *
	 * @param request
	 *            the request
	 * @return the list
	 */
	public List<Practice> searchPractices(SearchConsultantsRequest request, SearchConsultantDataContext context) {
		Map<BigInteger, Practice> practiceMap = new HashMap<>();
		Query query = new Query();
		if (request.getPracticeName() != null) {
			Criteria practiceNameCriteria = Criteria.where("practiceName").regex(request.getPracticeName());
			query.addCriteria(practiceNameCriteria);

		}
		// if(request.getSpeciality() != null){
		// if(MapUtils.isNotEmpty(context.getSpecialities())){
		// Criteria specialityCriteria =
		// Criteria.where("specialitiesSupported").in(context.getSpecialities().keySet());
		// query.addCriteria(specialityCriteria);
		// } else {
		// return Collections.EMPTY_LIST;
		// }
		// }
		if (request.getCity() != null) {
			Criteria practiceCityCriteria = Criteria.where("address.city").regex(request.getCity());
			query.addCriteria(practiceCityCriteria);
			if (request.getArea() != null) {
				Criteria practiceAreaCriteria = Criteria.where("address.area").regex(request.getArea());
				query.addCriteria(practiceAreaCriteria);
			}
		}
		if (request.getZip() != null) {
			Criteria specialityCriteria = Criteria.where("zip").regex(request.getZip());
			query.addCriteria(specialityCriteria);
		}

		if (request.getConsultantName() != null || request.getSpeciality() != null) {
			if (MapUtils.isNotEmpty(context.getConsultants())) {
				Criteria consultantNameCriteria = Criteria.where("consultantIds").in(context.getConsultants().keySet());
				query.addCriteria(consultantNameCriteria);
			}
		}

		List<Practice> practices = mongoOperations.find(query, Practice.class);

		if (request.getWithinMiles() != null) {

		}

		practices.stream().map(p -> practiceMap.put(p.getPracticeId(), p)).count();
		context.setPractices(practiceMap);
		return practices;
	}
}
