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
import com.wellme.practice.SearchPracticesRequest;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.SearchPracticeResultDto;
import com.wellme.practice.service.PracticeService;

/**
 * The Class PracticeController.
 */
@RestController
public class PracticeController {

	/** The practice service. */
	@Autowired
	private PracticeService practiceService;

	/**
	 * Search practices.
	 *
	 * @param request
	 *            the request
	 * @return the list
	 */
	@RequestMapping(value = "/searchPractices", method = RequestMethod.POST)
	public List<SearchPracticeResultDto> searchPractices(@RequestBody SearchPracticesRequest request) {
		return practiceService.findPractices(request);
	}

	/**
	 * Adds the practice.
	 */
	@RequestMapping(value = "/addPractice")
	public void addPractice() {
		List<Practice> practices = PracticeTestDataUtils.createPractice(3);
		practices.forEach(p -> {
			practiceService.savePractice(p);
		});
	}
}
