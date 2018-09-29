/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.practice.PracticeTestDataUtils;
import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.SearchConsultantDataContext;
import com.wellme.practice.model.SearchConsultantResultDto;
import com.wellme.practice.service.ConsultantSearchService;

/**
 * The Class roller.
 */
@RestController
public class ConsultantController {

	/** The practice service. */
	@Autowired
	private ConsultantSearchService consultantSearchService;

	@Autowired
	private PracticeTestDataUtils testDataUtils;

	/**
	 * Search practices.
	 *
	 * @param request
	 *            the request
	 * @return the list
	 */
	@RequestMapping(value = "/searchConsultants", method = RequestMethod.POST)
	public List<SearchConsultantResultDto> searchPractices(@RequestBody SearchConsultantsRequest request) {
		return consultantSearchService.findConsultants(request);
	}

	/**
	 * Adds the practice.
	 */
	@RequestMapping(value = "/addData")
	public void addPractice() {
		SearchConsultantDataContext dataContext = new SearchConsultantDataContext();
		testDataUtils.createData(dataContext);
		consultantSearchService.saveConsultantData(dataContext);

	}

}
