/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.repo;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.inject.Named;

import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import com.wellme.appointment.model.AppointmentDto;
import com.wellme.appointment.model.AppointmentParticipantDto;

/**
 * The Class AppointmentDao.
 */
@Component
public class AppointmentDao {
	
	/** The jdbc template. */
	NamedParameterJdbcTemplate jdbcTemplate;
	
	/** The appointment search SQL. */
	@Value("${appointment.search.ByPracticeAndConsultants}")
	private String appointmentSearchByParticipantsIdAndTypeSQL;
	
	@Value("${appointment.create.sql}")
	private String appointmentCreateSQL;


	/**
	 * Instantiates a new appointment dao.
	 *
	 * @param jdbcTemplate the jdbc template
	 */
	public AppointmentDao(@Named("medilinkJDBCTemplate") NamedParameterJdbcTemplate jdbcTemplate ){
		this.jdbcTemplate = jdbcTemplate;
	}

	public Collection<AppointmentDto> getAppointmentsByParticipantIdsAndType(Map<String, String> participantdIdsAndTypesMap){
		Set<String> participantdIdsAndTypes = participantdIdsAndTypesMap.entrySet().stream().map(es -> es.getKey() + "-" + es.getValue()).collect(Collectors.toSet());
		Map<String, Object> paramsMap = new HashMap<>();
		paramsMap.put("participantIdsAndTypes", participantdIdsAndTypes);
		Map<Long, AppointmentDto> appointmentsMap = new HashMap<>();
		jdbcTemplate.query(appointmentSearchByParticipantsIdAndTypeSQL, paramsMap, rs -> {
			
			Long eventId = rs.getLong("event_id");
			String eventName = rs.getString("event_name");
			String eventDescription = rs.getString("event_description");
			Date startDate = rs.getDate("start_date");
			Date endDate = rs.getDate("end_date");
			String eventLocation = rs.getString("event_location");
			Boolean isFullDay = BooleanUtils.toBoolean(rs.getString("is_full_day"), "Y", "N");
			Boolean isRecurring = BooleanUtils.toBoolean(rs.getString("is_recurring"), "Y", "N");
			Long eventVersionId = rs.getLong("event_version_id");
			String participantId = rs.getString("participant_id");
			String participantType = rs.getString("participant_typ");
			String participationStatus = rs.getString("participation_status");
			Date participationStatusDate = rs.getDate("participation_status_dt");
			String participationStatusComments = rs.getString("participation_status_comments");
			Long participantVersionId = rs.getLong("participant_version_id");
			AppointmentDto appointment = appointmentsMap.get(eventId);
			if(appointment == null) {
				appointment = new AppointmentDto(eventId, eventName, eventDescription, startDate, endDate, eventLocation, isFullDay, isRecurring, eventVersionId, new ArrayList<>());
				appointmentsMap.put(eventId, appointment);
			}
			appointment.getParticipants().add(new AppointmentParticipantDto(participantId, participantType, participationStatus, participationStatusDate, participationStatusComments, participantVersionId));
		});
		return appointmentsMap.values();
	}

}
