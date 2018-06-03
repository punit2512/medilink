/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.wellme.common.util.GeoLocationUtils;
import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.AvailableSlotsDto;
import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.InsurancePlan;
import com.wellme.practice.model.InsuranceProvider;
import com.wellme.practice.model.InsuranceProviderDto;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.SearchConsultantDataContext;
import com.wellme.practice.model.SearchConsultantResultDto;
import com.wellme.practice.model.SearchPracticeResultDto;
import com.wellme.practice.model.Speciality;
import com.wellme.practice.repo.BoardCertificateRepository;
import com.wellme.practice.repo.ConsultantDao;
import com.wellme.practice.repo.ConsultantRepository;
import com.wellme.practice.repo.InsurancePlansRepository;
import com.wellme.practice.repo.InsuranceProviderDao;
import com.wellme.practice.repo.InsuranceProviderRepository;
import com.wellme.practice.repo.InsuranceTypeDao;
import com.wellme.practice.repo.PracticeDao;
import com.wellme.practice.repo.PracticeRepository;
import com.wellme.practice.repo.SpecialityDao;
import com.wellme.practice.repo.SpecialityRepository;

/**
 * The Class PracticeServiceImpl.
 */
@Component
public class ConsultantSearchServiceImpl implements ConsultantSearchService {

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
	InsurancePlansRepository insuranceTypeRepo;

	/** The practice dao. */
	@Autowired
	PracticeDao practiceDao;

	/** The consultant dao. */
	@Autowired
	ConsultantDao consultantDao;

	/** The insurance provider dao. */
	@Autowired
	InsuranceProviderDao insuranceProviderDao;

	/** The insurance type dao. */
	@Autowired
	InsuranceTypeDao insuranceTypeDao;

	/** The speciality dao. */
	@Autowired
	SpecialityDao specialityDao;

	@Autowired
	BoardCertificateRepository boardCertificatesRepo;

	/** The availability days. */
	@Value("${availability.days.to.show : 7}")
	int availabilityDays;

	/** The lower. */
	public static int LOWER = 10;

	/** The upper. */
	public static int UPPER = 21;

	/**
	 * Save practice.
	 *
	 * @param practice
	 *            the practice
	 */
	/*
	 * (non-Javadoc)
	 * 
	 * @see com.wellme.practice.service.PracticeService#savePractice(com.wellme.
	 * practice.model.Practice)
	 */
	public void saveConsultantData(SearchConsultantDataContext dataContext) {
		boardCertificatesRepo.save(dataContext.getBoardCertificates().values());
		specialityRepo.save(dataContext.getSpecialities().values());
		insuranceTypeRepo.save(dataContext.getInsurancePlans().values());
		insuranceProviderRepo.save(dataContext.getInsuranceProvdiers().values());
		practiceRepo.save(dataContext.getPractices().values());
		consultantRepo.save(dataContext.getConsultants().values());
	}

	/**
	 * Delete practice.
	 *
	 * @param practice
	 *            the practice
	 */

	/**
	 * Find practices.
	 *
	 * @param request
	 *            the request
	 * @return the list
	 */
	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * com.wellme.practice.service.PracticeService#findPractices(com.wellme.
	 * practice.SearchPracticesRequest)
	 */
	public List<SearchConsultantResultDto> findConsultants(SearchConsultantsRequest request) {
		SearchConsultantDataContext context = new SearchConsultantDataContext();
		List<Consultant> consultants = new ArrayList<>();
		if (request.getSpeciality() != null) {
			specialityDao.searchSpecialities(request, context);
		}
		if (request.getInsuranceType() != null) {
			insuranceTypeDao.searchInsuranceTypes(request, context);
		}
		if (request.getInsuranceProvider() != null || request.getInsuranceType() != null) {
			insuranceProviderDao.searchInsuranceProviders(request, context);
		}
		if (request.getConsultantName() != null || request.getSpeciality() != null) {
			consultants = consultantDao.searchConsultants(request, context);
		}
		List<Practice> practices = practiceDao.searchPractices(request, context);
		if (CollectionUtils.isNotEmpty(practices)
				&& CollectionUtils.isEmpty(consultants)) {
			List<BigInteger> consultantIds = new ArrayList<>();
			practices.stream().map(pr -> consultantIds.addAll(pr.getConsultantIds())).count();
			context.setConsultants(consultantDao.getByIds(consultantIds));
		}
		if (CollectionUtils.isNotEmpty(practices) && MapUtils.isEmpty(context.getSpecialities())) {
			List<BigInteger> specialityIds = new ArrayList<>();
			practices.stream().map(pr -> specialityIds.addAll(pr.getSpecialitiesSupported())).count();
			if (MapUtils.isNotEmpty(context.getConsultants())) {
				context.getConsultants().values().stream().map(c -> specialityIds.addAll(c.getSpecialityIds())).count();
			}
			Map<BigInteger, Speciality> specialities = specialityDao.getByIds(specialityIds);
			context.setSpecialities(specialities);
		}

		if (MapUtils.isNotEmpty(context.getConsultants()) && request.getInsuranceType() == null
				&& request.getInsuranceProvider() == null) {
			List<BigInteger> insurancePlanIds = new ArrayList<>();
			context.getConsultants().values().stream().map(c -> insurancePlanIds.addAll(c.getInsurancePlanIds())).count();
			Map<BigInteger, InsurancePlan> insurancePlans = insuranceTypeDao.getByIds(insurancePlanIds);
			context.setInsurancePlans(insurancePlans);
			insuranceProviderDao.searchInsuranceProviders(request, context);
		}

		

		return convertResultData(request, context);
	}

	/**
	 * Gets the available slots.
	 *
	 * @param consultantIds
	 *            the consultant ids
	 * @return the available slots
	 */
	private Map<BigInteger, List<AvailableSlotsDto>> getAvailableSlots(Set<BigInteger> consultantIds) {
		Map<BigInteger, List<AvailableSlotsDto>> availableSlotsMap = new HashMap<>();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/YYYY");

		LocalDate today = LocalDate.now();
		LocalDate endDate = today.plusDays(availabilityDays);
		for (BigInteger consultantId : consultantIds) {
			List<AvailableSlotsDto> availableSlots = new ArrayList<>();
			AvailableSlotsDto slot = new AvailableSlotsDto();
			for (LocalDate date = today; date.isBefore(endDate); date = date.plusDays(1)) {
				slot.setAppointmentDate(date.format(formatter));
				for (int i = 0; i < 8; i++) {
					int r = (int) (Math.random() * (UPPER - LOWER)) + LOWER;
					LocalTime startTime = LocalTime.of(r, 0);
					String startTimeString = startTime.toString();
					String endTimeString = startTime.plusHours(1).toString();
					slot.getAvailableTimes().put(startTimeString, endTimeString);
				}
				availableSlots.add(slot);
			}
			availableSlotsMap.put(consultantId, availableSlots);
		}
		return availableSlotsMap;
	}

	/**
	 * Convert result data.
	 *
	 * @param context
	 *            the context
	 * @return the list
	 */
	private List<SearchConsultantResultDto> convertResultData(SearchConsultantsRequest request,
			SearchConsultantDataContext context) {

		Map<BigInteger, List<AvailableSlotsDto>> availableSlotsMap = MapUtils.isNotEmpty(context.getConsultants())
				? getAvailableSlots(context.getConsultants().keySet()) : null;
		Map<BigInteger, Practice> practices = context.getPractices();
		Map<BigInteger, Consultant> consultants = context.getConsultants();
		Map<BigInteger, InsuranceProvider> insuranceProviders = context.getInsuranceProvdiers();
		List<SearchConsultantResultDto> consultantResults = new ArrayList<>();
		if (MapUtils.isNotEmpty(consultants)) {
			for (Map.Entry<BigInteger, Consultant> consultantEntry : consultants.entrySet()) {
				Consultant consultant = consultantEntry.getValue();
				SearchConsultantResultDto consultantResult = new SearchConsultantResultDto();
				for (BigInteger practiceId : consultant.getPracticeIds()) {

					Practice practice = practices.get(practiceId);
					if (practice != null) {
						SearchPracticeResultDto practiceDto = new SearchPracticeResultDto();

						practiceDto.setPrimaryAddress(practice.getPrimaryAddress());
						practiceDto.setPhones(practice.getPhones());
						practiceDto.setPracticeName(practice.getPracticeName());
						practiceDto.setPracticeSocialProfiles(practice.getSocialProfiles());
						if (practice.getPrimaryAddress() != null
								&& practice.getPrimaryAddress().getCoordinates() != null
								&& request.getCoordinates() != null) {
							practiceDto.setDistanceInMiles(GeoLocationUtils.getDistanceBetweenCoordinates(
									practice.getPrimaryAddress().getCoordinates(), request.getCoordinates(), false));
						}
						consultantResult.getPractices().add(practiceDto);
					}
				}
				List<String> specialities = new ArrayList<String>();
				for (BigInteger specialityId : consultant.getSpecialityIds()) {
					Speciality speciality = context.getSpecialities().get(specialityId);
					if (speciality != null) {
						specialities.add(speciality.getSpecialityName());
					}
				}
				consultantResult.setConsultantId(consultant.getConsultantId());
				consultantResult.setConsultantName(consultant.getUserFullName());
				consultantResult.setPhones(consultant.getPhones());
				consultantResult.setSocialProfiles(consultant.getSocialProfiles());

				consultantResult.setAvailableSlots(availableSlotsMap.get(consultant.getConsultantId()));
				if (CollectionUtils.isNotEmpty(specialities)) {
					consultantResult.setSpecialities(specialities);
				}
				
				if (CollectionUtils.isNotEmpty(consultant.getInsurancePlanIds())
						&& MapUtils.isNotEmpty(insuranceProviders)) {
					for (Map.Entry<BigInteger, InsuranceProvider> insuranceProviderEntry : insuranceProviders
							.entrySet()) {
						InsuranceProvider insuranceProvider = insuranceProviderEntry.getValue();

						for (BigInteger insurancePlanId : consultant.getInsurancePlanIds()) {
							if (insuranceProvider.getInsuranceTypeIds().contains(insurancePlanId)) {
								InsuranceProviderDto insuranceProviderDto = new InsuranceProviderDto();
								insuranceProviderDto.setInsuranceProviderId(insuranceProvider.getInsuranceProviderId());
								insuranceProviderDto
										.setInsuranceProviderName(insuranceProvider.getInsuranceProviderName());
								consultantResult.getInsuranceProviderDto().add(insuranceProviderDto);
								break;
							}
						}

					}
				}
				consultantResults.add(consultantResult);

			}
		}
		return consultantResults;
	}
}
