/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;

import com.wellme.appointment.model.Appointment;
import com.wellme.appointment.repo.AppointmentDao;
import com.wellme.common.model.PracticeConsultantKey;

/**
 * The Class AppointmentServiceImpl.
 */
public class AppointmentServiceImpl implements AppointmentService{

	/** The appointment dao. */
	@Autowired
	AppointmentDao appointmentDao;
	
	/* (non-Javadoc)
	 * @see com.wellme.appointment.service.AppointmentService#searchByPracticeAndConsultants(java.util.Set)
	 */
	@Override
	public List<Appointment> searchByPracticeAndConsultants(Set<PracticeConsultantKey> keys){
		return appointmentDao.getAppointmentsByPracticeConsultantKeys(keys);
	}
	
	/* (non-Javadoc)
	 * @see com.wellme.appointment.service.AppointmentService#createAppointment(com.wellme.appointment.model.Appointment)
	 */
	@Override
	public void createAppointment(Appointment appointment){
		appointmentDao.createAppointment(appointment);
	}
}
