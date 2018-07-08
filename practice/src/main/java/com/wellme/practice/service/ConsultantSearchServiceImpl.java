/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.collections.MapUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.google.common.collect.ArrayListMultimap;
import com.google.common.collect.Multimap;
import com.wellme.common.util.GeoLocationUtils;
import com.wellme.practice.SearchConsultantsRequest;
import com.wellme.practice.model.AppointmentDto;
import com.wellme.practice.model.AppointmentParticipantDto;
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
	
	private static final String PARTICIPANT_TYPE_DOCTOR = "CONSULTANT";

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
	
	/** The availability days. */
	@Value("${default.appointment.start.time.hour : 8}")
	int defaultAppointmentStartTimeHour;
	@Value("${default.appointment.start.time.min : 0}")
	int defaultAppointmentStartTimeMin;
	@Value("${default.appointment.end.time.hour : 21}")
	int defaultAppointmentEndTimeHour;
	@Value("${default.appointment.End.time.hour : 0}")
	int defaultAppointmentEndTimeMin;
	
	
	@Autowired
	RestTemplate restTemplate;

	/** The lower. */
	public static int LOWER = 10;

	/** The upper. */
	public static int UPPER = 21;
	
	/** The appointment search SQL. */
	@Value("${appointment.service.url}")
	String appointmentServiceURL;
	
	

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
	private Map<BigInteger, List<AvailableSlotsDto>> getAvailableSlots(Map<BigInteger, Consultant> consultantsMap) {
		Set<BigInteger> consultantIds = consultantsMap.keySet();
		Map<BigInteger, List<AvailableSlotsDto>> availableSlotsMap = new HashMap<>();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/YYYY");
		Map<String, String> participantIdAndType = new HashMap<>();
		consultantIds.stream().map(cid -> participantIdAndType.put(cid.toString(), PARTICIPANT_TYPE_DOCTOR)).count();
		
		HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(participantIdAndType); 
		
		ResponseEntity<List<AppointmentDto>> appointmentsResponse = restTemplate.exchange(appointmentServiceURL, HttpMethod.POST, requestEntity, new ParameterizedTypeReference<List<AppointmentDto>>(){
		});
		
		List<AppointmentDto> appointments = appointmentsResponse.getBody();
		
		Multimap<BigInteger, AppointmentDto> appointmentsByConsultant = ArrayListMultimap.create();
		
		for (AppointmentDto appointment : appointments) {
			List<AppointmentParticipantDto> participants = appointment.getParticipants();
			for (AppointmentParticipantDto participantDto : participants) {
				for (BigInteger consultantId : consultantIds) {
					if (participantDto.getParticipantId().equals(consultantId.toString())
							&& participantDto.getParticipantType().equals(PARTICIPANT_TYPE_DOCTOR)) {
						appointmentsByConsultant.put(consultantId, appointment);
						// Assumption here before breaking is an appointment will not have two
						// consultants.
						break;
					}
				}
			}
		}
		
		LocalDate today = LocalDate.now();
		LocalDate endDate = today.plusDays(availabilityDays);
		ZoneId defaultZoneId = ZoneId.systemDefault();
		for (BigInteger consultantId : consultantIds) {
			Consultant consultant = consultantsMap.get(consultantId);
			LocalTime appointmentStartTime = consultant.getAppointmentsStartTime() == null ? LocalTime.of(defaultAppointmentStartTimeHour, defaultAppointmentStartTimeMin) : consultant.getAppointmentsStartTime();
			
			LocalTime appointmentEndTime = consultant.getAppointmentsEndTime() == null ? LocalTime.of(defaultAppointmentEndTimeHour, defaultAppointmentEndTimeMin) : consultant.getAppointmentsEndTime();
			int appointmentDurationInMins = consultant.getAppointmentDurationInMins();
			
			List<AvailableSlotsDto> availableSlots = new ArrayList<>();
			
			Collection<AppointmentDto> appointmentsForConsultant = appointmentsByConsultant.get(consultantId);
			for (LocalDate date = today; date.isBefore(endDate); date = date.plusDays(1)) {
				AvailableSlotsDto slot = new AvailableSlotsDto();
				slot.setAppointmentDate(date.format(formatter));
				LocalTime apptTime = LocalTime.of(appointmentStartTime.getHour(), appointmentEndTime.getMinute());
				while(apptTime.isBefore(appointmentEndTime)){
					LocalTime apptEndTime = apptTime.plusMinutes(appointmentDurationInMins);
					Date apptStartDate = Date.from(date.atTime(apptTime).atZone(defaultZoneId).toInstant());
					//Date apptEndDate = Date.from(date.atTime(apptEndTime).atZone(defaultZoneId).toInstant());
					boolean slotBusy = false;
					for(AppointmentDto appointment: appointmentsForConsultant) {
						if((appointment.getAppointmentStartDate().before(apptStartDate) ||  appointment.getAppointmentStartDate().equals(apptStartDate) )&& appointment.getAppointmentEndDate().after(apptStartDate)) {
							slotBusy = true;
							break;
						}
						
						
					}
					if(!slotBusy) {
						slot.getAvailableTimes().put(apptTime.toString(), apptEndTime.toString());
					}
					apptTime = apptEndTime;
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
				? getAvailableSlots(context.getConsultants()) : null;
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
