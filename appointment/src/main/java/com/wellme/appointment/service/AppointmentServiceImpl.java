/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.appointment.factory.EventFactory;
import com.wellme.appointment.factory.EventParticipantFactory;
import com.wellme.appointment.model.AppointmentDto;
import com.wellme.appointment.model.Event;
import com.wellme.appointment.model.EventParticipant;
import com.wellme.appointment.repo.AppointmentDao;
import com.wellme.appointment.repo.EventRepo;

/**
 * The Class AppointmentServiceImpl.
 */
@Component
public class AppointmentServiceImpl implements AppointmentService{

	/** The appointment dao. */
	@Autowired
	AppointmentDao appointmentDao;
	
	/** The event repo. */
	@Autowired
	EventRepo eventRepo;
	
	/** The event factory. */
	@Autowired
	EventFactory eventFactory;
	
	/** The event participant factory. */
	@Autowired
	EventParticipantFactory eventParticipantFactory;
	
	/* (non-Javadoc)
	 * @see com.wellme.appointment.service.AppointmentService#searchByPracticeAndConsultants(java.util.Set)
	 */
	@Override
	public Collection<AppointmentDto> searchByParticipantIdsAndType(Map<String, String> participantIdTypeMap){
		return appointmentDao.getAppointmentsByParticipantIdsAndType(participantIdTypeMap);
	}
	
	/* (non-Javadoc)
	 * @see com.wellme.appointment.service.AppointmentService#createAppointment(com.wellme.appointment.model.Appointment)
	 */
	@Override
	@Transactional
	public Long createAppointment(AppointmentDto appointment){
		Date insTs = new Date();
		String insLogin = "PUNIT";
		Event event = eventFactory.createEvent(appointment.getEventName(), appointment.getEventDescription(), appointment.getAppointmentStartDate(), appointment.getAppointmentEndDate(), appointment.isFullDay(), appointment.isRecurring(), appointment.getAppointmentLocation(), insTs, insLogin);
		List<EventParticipant> participants = new ArrayList<>();
		appointment.getParticipants().stream().forEach(pa -> {
			participants.add(eventParticipantFactory.createEventParticipant(event.getEventId(), pa.getParticipantId(), pa.getParticipantType(), pa.getParticipationStatus(), pa.getParticipationStatusDate(), pa.getParticipationStatusComments(), insTs, insLogin));
		});
		event.setEventParticipants(participants);
		eventRepo.save(event);
		return event.getEventId();
		//return null;
	}
}
