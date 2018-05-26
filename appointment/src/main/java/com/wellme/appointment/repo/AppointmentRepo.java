package com.wellme.appointment.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wellme.appointment.model.Appointment;

public interface AppointmentRepo extends MongoRepository<Appointment, String>{

}
