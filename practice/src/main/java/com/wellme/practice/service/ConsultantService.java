/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.ConsultantDto;
import com.wellme.practice.request.SubmitConsultantReviewRequest;

/**
 * The Interface ConsultantService.
 */
public interface ConsultantService {
	
	/**
	 * Creates the consultant.
	 *
	 * @param consultant the consultant
	 * @return the consultant
	 */
	public Consultant createConsultant(ConsultantDto consultant);
	
	/**
	 * Adds the consultant review.
	 *
	 * @param request the request
	 */
	public void addConsultantReview(SubmitConsultantReviewRequest request);
}
