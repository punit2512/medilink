package com.wellme.appointment;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.appointment.model.AppointmentDto;
import com.wellme.appointment.service.AppointmentService;

@RestController
public class AppointmentController {

	@Autowired
	AppointmentService appointmentService;
	
	@RequestMapping(value="/searchAppointmentsByParticipantIdsAndTypes", method = RequestMethod.POST)
	public Collection<AppointmentDto> getAppointmentsByPracticeConsultantKeys(@RequestBody Map<String, String> participantIdsAndTypes){
		return appointmentService.searchByParticipantIdsAndType(participantIdsAndTypes);
	}
	
	@RequestMapping(value="/createAppointment", method=RequestMethod.POST)
	public Long createAppointment(@RequestBody AppointmentDto appointmentDto) {
		return appointmentService.createAppointment(appointmentDto);
	}
	
	
}
