/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import java.util.List;

import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.SearchConsultantDataContext;
import com.wellme.practice.model.SearchConsultantResultDto;

/**
 * The Interface PracticeService.
 */
public interface ConsultantSearchService {
	
	/**
	 * Save practice.
	 *
	 * @param practice the practice
	 */
	void saveConsultantData(SearchConsultantDataContext dataContext);
	
	
	/**
	 * Find practices.
	 *
	 * @param searchPracticeRequest the search practice request
	 * @return the list
	 */
	List<SearchConsultantResultDto> findConsultants(SearchConsultantsRequest searchConsultantsRequest);
}
