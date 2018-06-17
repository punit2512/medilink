package com.wellme.appointment.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wellme.appointment.model.Event;

@Repository
public interface EventRepo extends JpaRepository<Event, Long> {

}
