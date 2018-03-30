/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.repo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import com.wellme.practice.SearchPracticesRequest;
import com.wellme.practice.model.Practice;

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
	 * @param request the request
	 * @return the list
	 */
	public List<Practice> searchPractices(SearchPracticesRequest request){
		Query query = new Query();
		if(request.getPracticeName() != null){
			Criteria practiceNameCriteria = Criteria.where("practiceName").regex(request.getPracticeName());
			query.addCriteria(practiceNameCriteria);
			
		}
		if(request.getConsultantName() != null){
			Criteria consultantNameCriteria = Criteria.where("consultants.userFullName").regex(request.getConsultantName());
			query.addCriteria(consultantNameCriteria);
		}
		
		if(request.getCity() != null){
			Criteria practiceCityCriteria = Criteria.where("address.city").regex(request.getCity());
			query.addCriteria(practiceCityCriteria);	
			if(request.getArea() != null){
				Criteria practiceAreaCriteria = Criteria.where("address.area").regex(request.getArea());
				query.addCriteria(practiceAreaCriteria);	
			}
		}
		if(request.getInsuranceProvider() != null){
			Criteria consultantNameCriteria = Criteria.where("insuranceProviders.insuranceProviderName").regex(request.getInsuranceProvider());
			query.addCriteria(consultantNameCriteria);
		}
		if(request.getSpeciality() != null){
			Criteria specialityCriteria = Criteria.where("consultants.specialities.specialityName").regex(request.getSpeciality());
			query.addCriteria(specialityCriteria);
		}
		if(request.getZip() != null){
			Criteria specialityCriteria = Criteria.where("zip").regex(request.getZip());
			query.addCriteria(specialityCriteria);
		}
		if(request.getWithinMiles() != null){
			
		}
		List<Practice> practices = mongoOperations.find(query,Practice.class);
		return practices;
	}
}
