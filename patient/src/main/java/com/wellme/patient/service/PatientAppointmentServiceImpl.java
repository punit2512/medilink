/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.service;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.wellme.patient.factory.PatientAppointmentFactory;
import com.wellme.patient.model.AppointmentDto;
import com.wellme.patient.model.AppointmentParticipantDto;
import com.wellme.patient.model.Patient;
import com.wellme.patient.model.PatientAppointment;
import com.wellme.patient.model.PatientAppointmentDto;
import com.wellme.patient.repo.PatientAppointmentRepo;
import com.wellme.patient.repo.PatientDao;
import com.wellme.patient.repo.PatientRepository;

/**
 * The Class PatientAppointmentServiceImpl.
 */
@Component
public class PatientAppointmentServiceImpl implements PatientAppointmentService{
	
	/** The patient repo. */
	@Autowired
	PatientRepository patientRepo;
	
	/** The patient dao. */
	@Autowired
	PatientDao patientDao;
	
	/** The patient appointment repo. */
	@Autowired
	PatientAppointmentRepo patientAppointmentRepo;
	
	/** The rest template. */
	@Autowired
	RestTemplate restTemplate;

	/** The patient service. */
	@Autowired
	PatientService patientService;
	
	/** The patient appointment factory. */
	@Autowired
	PatientAppointmentFactory patientAppointmentFactory;
	
	/** The appointment search SQL. */
	@Value("${appointment.service.createAppointment.url}")
	String createAppointmentServiceURL;
	
	/** The appointment search SQL. */
	@Value("${appointment.service.updateAppointment.url}")
	String updateAppointmentServiceURL;
	
	/** The appointment search SQL. */
	@Value("${appointment.service.cancelAppointment.url}")
	String cancelAppointmentServiceURL;
	
	
	/* (non-Javadoc)
	 * @see com.wellme.patient.service.PatientAppointmentService#bookAppointment(com.wellme.patient.model.PatientAppointmentDto, java.lang.String)
	 */
	@Override
	public void bookAppointment(PatientAppointmentDto patientAppointmentDto, String insLogin) {
		
		Date date = new Date();
		List<Patient> patients = patientDao.findByPatientDetails(patientAppointmentDto.getFirstName(), patientAppointmentDto.getLastName(), patientAppointmentDto.getMiddleName(), patientAppointmentDto.getPhoneNumber(), patientAppointmentDto.getEmail(), patientAppointmentDto.getPatientId());

		Patient patient ;
		if(CollectionUtils.isNotEmpty(patients)) {
			patient = patients.get(0);
		} else {
			patient = patientService.createPatient(null, patientAppointmentDto.getFirstName(), patientAppointmentDto.getLastName(), patientAppointmentDto.getMiddleName(), patientAppointmentDto.getEmail(), patientAppointmentDto.getPhoneNumber(), patientAppointmentDto.getGender(), null);
		}
		BigInteger patientId = patient.getPatientId();
		AppointmentParticipantDto participantDtoPatient = new AppointmentParticipantDto(patientId.toString(), "PATIENT", "CONFIRMED", new Date(), null, 0L);
		AppointmentParticipantDto participantDtoConsultant = new AppointmentParticipantDto(patientAppointmentDto.getConsultantId().toString(), "CONSULTANT", "CONFIRMED", new Date(), null, 0L);
		List<AppointmentParticipantDto> participants = new ArrayList<>();
		participants.add(participantDtoPatient);
		participants.add(participantDtoConsultant);
		AppointmentDto appointmentDto = new AppointmentDto(patientAppointmentDto.getAppointmentSummary(), patientAppointmentDto.getAppointmentNotes(), patientAppointmentDto.getAppointmentStartDate(), patientAppointmentDto.getAppointmentEndDate(), patientAppointmentDto.getAppointmentLocation(), false, false, 0L, participants);
		ResponseEntity<Long> eventResponse = restTemplate.postForEntity(createAppointmentServiceURL, appointmentDto, Long.class);
		Long appointmentId = eventResponse.getBody();
		PatientAppointment patientAppointment = patientAppointmentFactory.createPatientAppointment(patientId, BigInteger.valueOf(appointmentId), patientAppointmentDto.getAppointmentStartDate(), patientAppointmentDto.getAppointmentEndDate(), patientAppointmentDto.getPracticeId(), patientAppointmentDto.getConsultantId(), patientAppointmentDto.getInsurancePlanId(), patientAppointmentDto.getInsuranceProviderId(), "NEW", date, insLogin);
		patientAppointmentRepo.save(patientAppointment);
	}
	
	/**
	 * Cancel appointment.
	 *
	 * @param patientAppointmentId the patient appointment id
	 */
	public void cancelAppointment(BigDecimal patientAppointmentId) {
		PatientAppointment patientAppointment = patientAppointmentRepo.findOne(patientAppointmentId);
		ResponseEntity<Void> response = restTemplate.postForEntity(updateAppointmentServiceURL, patientAppointment.getAppointmentId(),  Void.class);
		patientAppointment.setAppoointmentStatus("CANCELED");
		patientAppointmentRepo.save(patientAppointment);
	}
	
	/**
	 * Update appointment.
	 *
	 * @param patientAppointmentDto the patient appointment dto
	 */
	public void updateAppointment(PatientAppointmentDto patientAppointmentDto) {
		PatientAppointment patientAppointment = patientAppointmentRepo.findOne(patientAppointmentDto.getPatientAppointmentId());
		patientAppointmentFactory.updatePatientAppointment(patientAppointment, patientAppointmentDto.getAppointmentStartDate(), patientAppointmentDto.getAppointmentEndDate(), patientAppointmentDto.getInsurancePlanId(), patientAppointmentDto.getInsuranceProviderId(), "UPDATED",new Date(), "PUNIT");
		ResponseEntity<Void> response = restTemplate.postForEntity(cancelAppointmentServiceURL, patientAppointment,  Void.class);
		patientAppointmentRepo.save(patientAppointment);
	}

}
