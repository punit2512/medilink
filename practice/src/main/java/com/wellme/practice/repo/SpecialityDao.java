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
import com.wellme.practice.model.SearchConsultantDataContext;
import com.wellme.practice.model.Speciality;

/**
 * The Class SpecialityDao.
 */
@Component
public class SpecialityDao {
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
	public List<Speciality> searchSpecialities(SearchConsultantsRequest request, SearchConsultantDataContext context){
		Map<BigInteger, Speciality> specialityMap = new HashMap<>();
		Query query = new Query();
		if(request.getSpeciality() != null){
			Criteria nameCriteria = Criteria.where("specialityName").regex(request.getSpeciality());
			query.addCriteria(nameCriteria);
			List<Speciality> specialities = mongoOperations.find(query,Speciality.class);
			specialities.stream().map(s -> specialityMap.put(s.getSpecialityId(), s)).count();
			context.setSpecialities(specialityMap);
			return specialities;
		}
		return null;
	}
	
	public Map<BigInteger, Speciality> getByIds(List<BigInteger> specialityIds){
		Map<BigInteger, Speciality> specialityMap = new HashMap<>();
		Query query = new Query();
		Criteria idsCriteria = Criteria.where("specialityId").in(specialityIds);
		query.addCriteria(idsCriteria);
		List<Speciality> specialities =  mongoOperations.find(query, Speciality.class);
		specialities.stream().map(s -> specialityMap.put(s.getSpecialityId(), s)).count();
		return specialityMap;
	}
}
