/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import java.util.List;

import com.wellme.practice.SearchPracticesRequest;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.SearchPracticeResultDto;

/**
 * The Interface PracticeService.
 */
public interface PracticeService {
	
	/**
	 * Save practice.
	 *
	 * @param practice the practice
	 */
	void savePractice(Practice practice);
	
	/**
	 * Delete practice.
	 *
	 * @param practice the practice
	 */
	void deletePractice(Practice practice);
	
	/**
	 * Find practices.
	 *
	 * @param searchPracticeRequest the search practice request
	 * @return the list
	 */
	List<SearchPracticeResultDto> findPractices(SearchPracticesRequest searchPracticeRequest);
}
