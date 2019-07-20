package com.wellme.practice.service;

import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.ConsultantDto;
import com.wellme.practice.model.ConsultantReview;
import com.wellme.practice.repo.ConsultantRepository;
import com.wellme.practice.request.SubmitConsultantReviewRequest;

public class ConsultantServiceImpl implements ConsultantService{
	
	
	ConsultantRepository consultantRepo;

	@Override
	public Consultant createConsultant(ConsultantDto consultant) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addConsultantReview(SubmitConsultantReviewRequest request) {
		Consultant consultant = consultantRepo.findOne(request.getConsultantId());
		ConsultantReview review = new ConsultantReview(request.getReviewedBy(), request.getReviewedOn(), request.getReviewRating(), request.getReviewComments());
		consultant.addConsultantReview(review);
	}

}
