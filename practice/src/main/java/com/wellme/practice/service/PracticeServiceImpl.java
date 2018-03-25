/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.practice.SearchPracticesRequest;
import com.wellme.practice.model.AvailableSlotsDto;
import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.InsuranceType;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.SearchConsultantResultDto;
import com.wellme.practice.model.SearchPracticeResultDto;
import com.wellme.practice.model.Speciality;
import com.wellme.practice.repo.ConsultantRepository;
import com.wellme.practice.repo.InsuranceProviderRepository;
import com.wellme.practice.repo.InsuranceTypesRepository;
import com.wellme.practice.repo.PracticeDao;
import com.wellme.practice.repo.PracticeRepository;
import com.wellme.practice.repo.SpecialityRepository;

/**
 * The Class PracticeServiceImpl.
 */
@Component
public class PracticeServiceImpl implements PracticeService{
	
	/** The practice repo. */
	@Autowired
	PracticeRepository practiceRepo;
	
	/** The consultant repo. */
	@Autowired
	ConsultantRepository consultantRepo;
	
	/** The speciality repo. */
	@Autowired
	SpecialityRepository specialityRepo;
	
	/** The insurance provider repo. */
	@Autowired
	InsuranceProviderRepository insuranceProviderRepo;
	
	/** The insurance type repo. */
	@Autowired
	InsuranceTypesRepository insuranceTypeRepo;
	
	
	/** The practice dao. */
	@Autowired
	PracticeDao practiceDao;
	
	/**
	 * Save practice.
	 *
	 * @param practice the practice
	 */
	/* (non-Javadoc)
	 * @see com.wellme.practice.service.PracticeService#savePractice(com.wellme.practice.model.Practice)
	 */
	public void savePractice(Practice practice){
		practiceRepo.save(practice);
		consultantRepo.save(practice.getConsultants());
		List<Speciality> specialities = new ArrayList<>();
		specialities.addAll(practice.getSpecialitiesSupported());
		practice.getConsultants().stream().map(c -> specialities.addAll(c.getSpecialities())).count();
		specialityRepo.save(specialities);
		
		insuranceProviderRepo.save(practice.getInsuranceProviders());
		List<InsuranceType> insuranceTypes = new ArrayList<>();
		practice.getInsuranceProviders().stream().map(ip -> insuranceTypes.addAll(ip.getInsuranceTypes())).count();
		insuranceTypeRepo.save(insuranceTypes);
		
	}
	
	/**
	 * Delete practice.
	 *
	 * @param practice the practice
	 */
	/* (non-Javadoc)
	 * @see com.wellme.practice.service.PracticeService#deletePractice(com.wellme.practice.model.Practice)
	 */
	public void deletePractice(Practice practice){
		practiceRepo.delete(practice);
	}
	
	/**
	 * Find practices.
	 *
	 * @param searchPracticeRequest the search practice request
	 * @return the list
	 */
	/* (non-Javadoc)
	 * @see com.wellme.practice.service.PracticeService#findPractices(com.wellme.practice.SearchPracticesRequest)
	 */
	public List<SearchPracticeResultDto> findPractices(SearchPracticesRequest searchPracticeRequest){
		List<Practice> practices = practiceDao.searchPractices(searchPracticeRequest);
		return convertResultData(practices);
	}
	
	/**
	 * Gets the available slots.
	 *
	 * @param consultantIds the consultant ids
	 * @return the available slots
	 */
	private Map<String, List<AvailableSlotsDto>> getAvailableSlots(List<String> consultantIds){
		return new HashMap<>();
	}
	
	/**
	 * Convert result data.
	 *
	 * @param practices the practices
	 * @return the list
	 */
	private List<SearchPracticeResultDto> convertResultData(List<Practice> practices){
		List<String> consultantIds = new ArrayList<>();
		List<SearchPracticeResultDto> results = new ArrayList<>();
		Map<String, List<AvailableSlotsDto>> availableSlotsMap = getAvailableSlots(consultantIds);
		for(Practice practice: practices){
			List<SearchConsultantResultDto> consultantResults = new ArrayList<>();
			for(Consultant consultant: practice.getConsultants()){
				SearchConsultantResultDto consultantResult = new SearchConsultantResultDto();
				consultantResult.setConsultantName(consultant.getUserFullName());
				consultantResult.setPhones(consultant.getPhones());
				consultantResult.setSocialProfiles(consultant.getSocialProfiles());
				consultantResult.setAvailableSlots(availableSlotsMap.get(consultant.getUserId()));
			}
			
			SearchPracticeResultDto practiceDto = new SearchPracticeResultDto();
			practiceDto.setAddresses(practice.getAddresses());
			practiceDto.setConsultants(consultantResults);
			practiceDto.setPhones(practice.getPhones());
			practiceDto.setPracticeName(practice.getPracticeName());
			results.add(practiceDto);
		}
		return results;
	}
}
