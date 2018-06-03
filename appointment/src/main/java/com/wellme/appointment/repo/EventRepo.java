package com.wellme.appointment.repo;

import org.springframework.data.repository.CrudRepository;

import com.wellme.appointment.model.Event;

public interface EventRepo extends CrudRepository<Event, Long> {

}
