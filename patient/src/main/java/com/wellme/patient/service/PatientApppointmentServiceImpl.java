package com.wellme.patient.service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.wellme.patient.factory.PatientAppointmentFactory;
import com.wellme.patient.factory.PatientFactory;
import com.wellme.patient.model.AppointmentDto;
import com.wellme.patient.model.AppointmentParticipantDto;
import com.wellme.patient.model.Patient;
import com.wellme.patient.model.PatientAppointment;
import com.wellme.patient.model.PatientAppointmentDto;
import com.wellme.patient.repo.PatientAppointmentRepo;
import com.wellme.patient.repo.PatientDao;
import com.wellme.patient.repo.PatientRepository;

public class PatientApppointmentServiceImpl implements PatientAppointmentService{
	
	@Autowired
	PatientRepository patientRepo;
	@Autowired
	PatientDao patientDao;
	@Autowired
	PatientAppointmentRepo patientAppointmentRepo;
	
	@Autowired
	RestTemplate restTemplate;
	@Autowired
	PatientFactory patientFactory;
	@Autowired
	PatientAppointmentFactory patientAppointmentFactory;
	
	/** The appointment search SQL. */
	@Value("${appointment.service.url}")
	String appointmentServiceURL;
	
	@Override
	public void bookAppointment(PatientAppointmentDto patientAppointmentDto, String insLogin) {
		
		Date date = new Date();
		List<Patient> patients = patientDao.findByPatientDetails(patientAppointmentDto.getFirstName(), patientAppointmentDto.getLastName(), patientAppointmentDto.getMiddleName(), patientAppointmentDto.getPhoneNumber(), patientAppointmentDto.getEmail(), patientAppointmentDto.getPatientId());
		
		Patient patient ;
		if(CollectionUtils.isNotEmpty(patients)) {
			patient = patients.get(0);
		} else {
			patient = patientFactory.createPatient(patientAppointmentDto.getFirstName(), patientAppointmentDto.getLastName(), patientAppointmentDto.getMiddleName(), patientAppointmentDto.getEmail(), patientAppointmentDto.getPhoneNumber(), patientAppointmentDto.getGender(), date, insLogin);
			patientRepo.save(patient);
		}
		BigInteger patientId = patient.getPatientId();
		AppointmentParticipantDto participantDtoPatient = new AppointmentParticipantDto(patientId.toString(), "PATIENT", "CONFIRMED", new Date(), null, 0L);
		AppointmentParticipantDto participantDtoConsultant = new AppointmentParticipantDto(patientAppointmentDto.getConsultantId().toString(), "CONSULTANT", "CONFIRMED", new Date(), null, 0L);
		List<AppointmentParticipantDto> participants = new ArrayList<>();
		participants.add(participantDtoPatient);
		participants.add(participantDtoConsultant);
		AppointmentDto appointmentDto = new AppointmentDto(patientAppointmentDto.getAppointmentSummary(), patientAppointmentDto.getAppointmentNotes(), patientAppointmentDto.getAppointmentStartDate(), patientAppointmentDto.getAppointmentEndDate(), patientAppointmentDto.getAppointmentLocation(), false, false, 0L, participants);
		ResponseEntity<Long> eventResponse = restTemplate.postForEntity(appointmentServiceURL, appointmentDto, Long.class);
		Long appointmentId = eventResponse.getBody();
		PatientAppointment patientAppointment = patientAppointmentFactory.createPatientAppointment(patientId, BigInteger.valueOf(appointmentId), patientAppointmentDto.getAppointmentStartDate(), patientAppointmentDto.getAppointmentEndDate(), patientAppointmentDto.getPracticeId(), patientAppointmentDto.getConsultantId(), patientAppointmentDto.getInsurancePlanId(), patientAppointmentDto.getInsuranceProviderId(), date, insLogin);
		patientAppointmentRepo.save(patientAppointment);
	}

}
