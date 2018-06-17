/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.factory;

import java.util.Date;

import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Component;

import com.wellme.appointment.model.Event;

/**
 * A factory for creating Event objects.
 */
@Component
public class EventFactory {

	/**
	 * Creates a new Event object.
	 *
	 * @param eventName
	 *            the event name
	 * @param eventDescription
	 *            the event description
	 * @param startDateTime
	 *            the start date time
	 * @param endDateTime
	 *            the end date time
	 * @param isFullDateEvent
	 *            the is full date event
	 * @param isRecurringEvent
	 *            the is recurring event
	 * @param eventLocation
	 *            the event location
	 * @param insTs
	 *            the ins ts
	 * @param insLogin
	 *            the ins login
	 * @return the event
	 */
	public Event createEvent(String eventName, String eventDescription, Date startDateTime, Date endDateTime,
			boolean isFullDayEvent, boolean isRecurringEvent, String eventLocation, Date insTs, String insLogin) {
		return new Event(eventName, eventDescription, startDateTime, endDateTime, BooleanUtils.toString(isFullDayEvent, "Y", "N"), BooleanUtils.toString(isRecurringEvent, "Y", "N"),
				eventLocation, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE);
	}

	/**
	 * Update event.
	 *
	 * @param event
	 *            the event
	 * @param startDateTime
	 *            the start date time
	 * @param endDateTime
	 *            the end date time
	 * @param isFullDayEvent
	 *            the is full day event
	 * @param updTs
	 *            the upd ts
	 * @param updLogin
	 *            the upd login
	 * @return the event
	 */
	public Event updateEvent(Event event, Date startDateTime, Date endDateTime, boolean isFullDayEvent, Date updTs,
			String updLogin) {
		return new Event(event.getEventName(), event.getEventDescription(), startDateTime, endDateTime, BooleanUtils.toString(isFullDayEvent, "Y", "N"),
				event.isRecurringEvent(), event.getEventLocation(), event.getInsTs(), updTs, event.getInsLogin(),
				updLogin, event.getVersionId() + 1, event.getPreviousVersionId());
	}
}
