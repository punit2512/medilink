/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.factory;

import java.util.Date;

import org.apache.commons.lang3.BooleanUtils;
import org.springframework.stereotype.Component;

import com.wellme.appointment.model.Event;
import com.wellme.appointment.model.EventStatusEnum;

/**
 * A factory for creating Event objects.
 */
@Component
public class EventFactory {

	/**
	 * Creates a new Event object.
	 *
	 * @param eventName            the event name
	 * @param eventDescription            the event description
	 * @param startDateTime            the start date time
	 * @param endDateTime            the end date time
	 * @param isFullDayEvent the is full day event
	 * @param isRecurringEvent            the is recurring event
	 * @param eventLocation            the event location
	 * @param eventStatus the event status
	 * @param insTs            the ins ts
	 * @param insLogin            the ins login
	 * @return the event
	 */
	public Event createEvent(String eventName, String eventDescription, Date startDateTime, Date endDateTime,
			boolean isFullDayEvent, boolean isRecurringEvent, String eventLocation, String eventStatus, Date insTs, String insLogin) {
		return new Event(eventName, eventDescription, startDateTime, endDateTime, BooleanUtils.toString(isFullDayEvent, "Y", "N"), BooleanUtils.toString(isRecurringEvent, "Y", "N"),
				eventLocation, eventStatus, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE);
	}

	/**
	 * Update event.
	 *
	 * @param event            the event
	 * @param eventStatus the event status
	 * @param startDateTime            the start date time
	 * @param endDateTime            the end date time
	 * @param isFullDayEvent            the is full day event
	 * @param updTs            the upd ts
	 * @param updLogin            the upd login
	 * @return the event
	 */
	public void updateEvent(Event event, String eventName,String eventStatus, Date startDateTime, Date endDateTime, boolean isFullDayEvent, boolean isRecurringEvent, String eventLocation, Date updTs,
			String updLogin) {
		event.setEventName(eventName);
		event.setEventStatus(EventStatusEnum.UPDATED.getValue());
		event.setStartDateTime(startDateTime);
		event.setEndDateTime(endDateTime);
		event.setEventLocation(eventLocation);
		event.setFullDateEvent(BooleanUtils.toString(isFullDayEvent, "Y", "N"));
		event.setRecurringEvent(BooleanUtils.toString(isRecurringEvent, "Y", "N"));
		event.setVersionId(event.getVersionId() + 1);
		event.setUpdLogin(updLogin);
		event.setUpdTs(updTs);
	}
}
