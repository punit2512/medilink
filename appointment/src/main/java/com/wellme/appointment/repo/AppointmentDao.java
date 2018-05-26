/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.repo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.inject.Named;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.convert.Jsr310Converters.DateToLocalDateConverter;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import com.wellme.appointment.model.Appointment;
import com.wellme.common.model.PracticeConsultantKey;

/**
 * The Class AppointmentDao.
 */
public class AppointmentDao {
	
	/** The jdbc template. */
	NamedParameterJdbcTemplate jdbcTemplate;
	
	/** The appointment search SQL. */
	@Value("${appointment.search.ByPracticeAndConsultants}")
	private String appointmentSearchSQL;
	
	@Value("${appointment.create.sql}")
	private String appointmentCreateSQL;
	
	/** The date converter. */
	private static DateToLocalDateConverter dateConverter;


	/**
	 * Instantiates a new appointment dao.
	 *
	 * @param jdbcTemplate the jdbc template
	 */
	public AppointmentDao(@Named("medilinkJDBCTemplate") NamedParameterJdbcTemplate jdbcTemplate ){
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public void createAppointment(Appointment appointment){
		Map<String, Object> paramsMap = new HashMap<>();
		paramsMap.put("appointmentId", appointment.getAppointmentId());
		paramsMap.put("patientId", appointment.getPatientId());
		paramsMap.put("practiceId", appointment.getPracticeId());
		paramsMap.put("docId", appointment.getConsultantId());
		paramsMap.put("appointmentDate", appointment.getPatientId());
		paramsMap.put("startTime", appointment.getStartTime());
		paramsMap.put("endTime", appointment.getEndTime());
		paramsMap.put("insTs", appointment.getInsTs());
		paramsMap.put("updTs", appointment.getUpdTs());
		paramsMap.put("insLogin", appointment.getInsLogin());
		paramsMap.put("updLogin", appointment.getUpdLogin());
		paramsMap.put("status", appointment.getStatus());
		paramsMap.put("specialInsturctions", appointment.getSpecialInstructions());
		
		jdbcTemplate.update(appointmentCreateSQL, paramsMap);
	}

	public List<Appointment> getAppointmentsByConsultantIds(Set<String> consultantIds){
		List<Appointment> appointments = new ArrayList<>();
		Map<String, Object> paramsMap = new HashMap<>();
		paramsMap.put("practiceConsultantIds", consultantIds);
		jdbcTemplate.query(appointmentSearchSQL, paramsMap, rs -> {
			
			appointments.add(mapRow(rs));
		});
		return appointments;
	}
	
	/**
	 * Gets the appointments by practice consultant keys.
	 *
	 * @param keys the keys
	 * @return the appointments by practice consultant keys
	 */
	public List<Appointment> getAppointmentsByPracticeConsultantKeys(Set<PracticeConsultantKey> keys){
		List<Appointment> appointments = new ArrayList<>();
		Map<String, Object> paramsMap = new HashMap<>();
		Set<String> keysStr = keys.stream().map(k -> k.toString()).collect(Collectors.toSet());
		paramsMap.put("practiceConsultantIds", keysStr);
		jdbcTemplate.query(appointmentSearchSQL, paramsMap, rs -> {
			
			appointments.add(mapRow(rs));
		});
		return appointments;
	}
	
	private Appointment mapRow(ResultSet rs) throws SQLException{
		Long appointmentId = rs.getLong("appointment_id");
		String patientId = rs.getString("patient_id");
		String practiceId = rs.getString("practice_id");
		String consultantId = rs.getString("consultant_id");
		Date appmtDate = rs.getDate("appointment_date");
		LocalDate appointmentDate = dateConverter.convert(appmtDate);
		LocalTime startTime = rs.getTime("start_time").toLocalTime();
		LocalTime endTime = rs.getTime("end_time").toLocalTime();
		String status = rs.getString("status");
		String specialInstruction = rs.getString("special_instructions");
		Date insTs = rs.getDate("ins_ts");
		Date updTs = rs.getDate("upd_ts");
		String insLogin = rs.getString("ins_login");
		String updLogin = rs.getString("upd_login");
		Appointment appointment  = new Appointment(appointmentId, patientId, practiceId, consultantId, appointmentDate, startTime, endTime, status, specialInstruction, insTs, updTs, insLogin, updLogin);
		return appointment;
	}
}
