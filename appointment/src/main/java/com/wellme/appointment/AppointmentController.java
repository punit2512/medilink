package com.wellme.appointment;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wellme.appointment.model.Appointment;
import com.wellme.appointment.service.AppointmentService;
import com.wellme.common.model.PracticeConsultantKey;

@RestController
public class AppointmentController {

	@Autowired
	AppointmentService appointmentService;
	
	@RequestMapping(value="/searchByPracticeConsultantKeys", method = RequestMethod.POST)
	public List<Appointment> getAppointmentsByPracticeConsultantKeys(@RequestBody Set<PracticeConsultantKey> practiceConsultantKeys){
		return appointmentService.searchByPracticeAndConsultants(practiceConsultantKeys);
	}
	
	
}
