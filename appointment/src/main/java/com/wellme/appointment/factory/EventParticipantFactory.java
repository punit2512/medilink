/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.factory;

import java.util.Date;

import com.wellme.appointment.model.EventParticipant;

/**
 * A factory for creating EventParticipant objects.
 */
public class EventParticipantFactory {
	
	/**
	 * Creates a new EventParticipant object.
	 *
	 * @param eventId the event id
	 * @param participantId the participant id
	 * @param participationStatus the participation status
	 * @param participationStatusDate the participation status date
	 * @param participationStatusComments the participation status comments
	 * @param insTs the ins ts
	 * @param insLogin the ins login
	 * @return the event participant
	 */
	public EventParticipant createEventParticipant(Long eventId, String participantId, String participationStatus,
			Date participationStatusDate, String participationStatusComments, Date insTs, String insLogin) {
		return new EventParticipant(eventId, participantId, participationStatus, participationStatusDate, participationStatusComments, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE);
	}
	
	/**
	 * Update event participant.
	 *
	 * @param eventParticipant the event participant
	 * @param participationStatus the participation status
	 * @param participationStatusDate the participation status date
	 * @param participationStatusComments the participation status comments
	 * @param updTs the upd ts
	 * @param updLogin the upd login
	 * @return the event participant
	 */
	public EventParticipant updateEventParticipant(EventParticipant eventParticipant, String participationStatus, Date participationStatusDate, String participationStatusComments, Date updTs, String updLogin) {
		return new EventParticipant(eventParticipant.getEventId(), eventParticipant.getParticipantId(), participationStatus, participationStatusDate, participationStatusComments, eventParticipant.getInsTs(), updTs, eventParticipant.getInsLogin(), updLogin, eventParticipant.getVersionId(), eventParticipant.getVersionId());
	}
}
