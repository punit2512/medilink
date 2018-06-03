/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import org.springframework.data.annotation.Id;

/**
 * The Class Event.
 */
public class Event implements Serializable{
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The event id. */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_seq_generator")
	@SequenceGenerator(name="event_seq_generator", sequenceName = "event_seq", allocationSize=50)
	@Column(name = "EVENT_ID", updatable = false, nullable = false)
	/** The event id. */
	private Long eventId;
	
	/** The event name. */
	@Column(name = "EVENT_NAME")
	private String eventName;
	
	/** The event description. */
	@Column(name = "EVENT_DESCRIPTION")
	private String eventDescription;
	
	/** The start date time. */
	@Column(name = "START_DATE")
	private Date startDateTime;
	
	/** The end date time. */
	@Column(name = "END_DATE")
	private Date endDateTime;
	
	/** The is full date event. */
	@Column(name = "IS_FULL_DAY")
	private boolean isFullDateEvent;
	
	/** The is recurring event. */
	@Column(name = "IS_RECURRING")
	private boolean isRecurringEvent;
	
	/** The event location. */
	@Column(name="EVENT_LOCATION")
	private String eventLocation;
	
	/** The ins ts. */
	@Column(name = "INS_TS")
	protected Date insTs;
	
	/** The upd ts. */
	@Column(name = "UPD_TS")
	protected Date updTs;
	
	/** The ins login. */
	@Column(name = "INS_LOGIN")
	protected String insLogin;
	
	/** The upd login. */
	@Column(name = "UPD_LOGIN")
	protected String updLogin;
	
	/** The version id. */
	@Column(name = "VERSION_ID")
	private long versionId;
	
	/** The previos version id. */
	private long previousVersionId;
	
	/** The event recurrence. */
	@OneToOne
	@JoinColumn(name="EVENT_ID")
	private EventRecurrence eventRecurrence;
	
	/** The event instance exceptions. */
	@OneToMany
	@JoinColumn(name="EVENT_ID")
	private List<EventInstanceException> eventInstanceExceptions;
	
	/** The event participants. */
	@OneToMany
	@JoinColumn(name="EVENT_ID")
	private List<EventParticipant> eventParticipants;
	
	
	/**
	 * Instantiates a new event.
	 *
	 * @param eventName the event name
	 * @param eventDescription the event description
	 * @param startDateTime the start date time
	 * @param endDateTime the end date time
	 * @param isFullDateEvent the is full date event
	 * @param isRecurringEvent the is recurring event
	 * @param eventLocation the event location
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public Event(String eventName, String eventDescription, Date startDateTime, Date endDateTime,
			boolean isFullDateEvent, boolean isRecurringEvent, String eventLocation, Date insTs, Date updTs, String insLogin, String updLogin,
			long versionId, long previousVersionId) {
		super();
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.startDateTime = startDateTime;
		this.endDateTime = endDateTime;
		this.isFullDateEvent = isFullDateEvent;
		this.isRecurringEvent = isRecurringEvent;
		this.eventLocation = eventLocation;
		this.insTs = insTs;
		this.updTs = updTs;
		this.insLogin = insLogin;
		this.updLogin = updLogin;
		this.versionId = versionId;
		this.previousVersionId = previousVersionId;
	}

	/**
	 * Gets the event id.
	 *
	 * @return the event id
	 */
	public Long getEventId() {
		return eventId;
	}
	
	/**
	 * Sets the event id.
	 *
	 * @param eventId the new event id
	 */
	public void setEventId(Long eventId) {
		this.eventId = eventId;
	}
	
	/**
	 * Gets the event name.
	 *
	 * @return the event name
	 */
	public String getEventName() {
		return eventName;
	}
	
	/**
	 * Sets the event name.
	 *
	 * @param eventName the new event name
	 */
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	/**
	 * Gets the event description.
	 *
	 * @return the event description
	 */
	public String getEventDescription() {
		return eventDescription;
	}
	
	/**
	 * Sets the event description.
	 *
	 * @param eventDescription the new event description
	 */
	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}
	
	/**
	 * Gets the start date time.
	 *
	 * @return the start date time
	 */
	public Date getStartDateTime() {
		return startDateTime;
	}
	
	/**
	 * Sets the start date time.
	 *
	 * @param startDateTime the new start date time
	 */
	public void setStartDateTime(Date startDateTime) {
		this.startDateTime = startDateTime;
	}
	
	/**
	 * Gets the end date time.
	 *
	 * @return the end date time
	 */
	public Date getEndDateTime() {
		return endDateTime;
	}
	
	/**
	 * Sets the end date time.
	 *
	 * @param endDateTime the new end date time
	 */
	public void setEndDateTime(Date endDateTime) {
		this.endDateTime = endDateTime;
	}
	
	/**
	 * Checks if is full date event.
	 *
	 * @return true, if is full date event
	 */
	public boolean isFullDateEvent() {
		return isFullDateEvent;
	}
	
	/**
	 * Sets the full date event.
	 *
	 * @param isFullDateEvent the new full date event
	 */
	public void setFullDateEvent(boolean isFullDateEvent) {
		this.isFullDateEvent = isFullDateEvent;
	}
	
	/**
	 * Checks if is recurring event.
	 *
	 * @return true, if is recurring event
	 */
	public boolean isRecurringEvent() {
		return isRecurringEvent;
	}
	
	/**
	 * Sets the recurring event.
	 *
	 * @param isRecurringEvent the new recurring event
	 */
	public void setRecurringEvent(boolean isRecurringEvent) {
		this.isRecurringEvent = isRecurringEvent;
	}

	/**
	 * Gets the event location.
	 *
	 * @return the event location
	 */
	public String getEventLocation() {
		return eventLocation;
	}

	/**
	 * Sets the event location.
	 *
	 * @param eventLocation the new event location
	 */
	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}

	/**
	 * Gets the ins ts.
	 *
	 * @return the ins ts
	 */
	public Date getInsTs() {
		return insTs;
	}

	/**
	 * Sets the ins ts.
	 *
	 * @param insTs the new ins ts
	 */
	public void setInsTs(Date insTs) {
		this.insTs = insTs;
	}

	/**
	 * Gets the upd ts.
	 *
	 * @return the upd ts
	 */
	public Date getUpdTs() {
		return updTs;
	}

	/**
	 * Sets the upd ts.
	 *
	 * @param updTs the new upd ts
	 */
	public void setUpdTs(Date updTs) {
		this.updTs = updTs;
	}

	/**
	 * Gets the ins login.
	 *
	 * @return the ins login
	 */
	public String getInsLogin() {
		return insLogin;
	}

	/**
	 * Sets the ins login.
	 *
	 * @param insLogin the new ins login
	 */
	public void setInsLogin(String insLogin) {
		this.insLogin = insLogin;
	}

	/**
	 * Gets the upd login.
	 *
	 * @return the upd login
	 */
	public String getUpdLogin() {
		return updLogin;
	}

	/**
	 * Sets the upd login.
	 *
	 * @param updLogin the new upd login
	 */
	public void setUpdLogin(String updLogin) {
		this.updLogin = updLogin;
	}

	/**
	 * Gets the version id.
	 *
	 * @return the version id
	 */
	public long getVersionId() {
		return versionId;
	}

	/**
	 * Sets the version id.
	 *
	 * @param versionId the new version id
	 */
	public void setVersionId(long versionId) {
		this.versionId = versionId;
	}

	/**
	 * Gets the previous version id.
	 *
	 * @return the previous version id
	 */
	public long getPreviousVersionId() {
		return previousVersionId;
	}

	/**
	 * Sets the previous version id.
	 *
	 * @param previousVersionId the new previous version id
	 */
	public void setPreviousVersionId(long previousVersionId) {
		this.previousVersionId = previousVersionId;
	}

	/**
	 * Gets the event recurrence.
	 *
	 * @return the event recurrence
	 */
	public EventRecurrence getEventRecurrence() {
		return eventRecurrence;
	}

	/**
	 * Sets the event recurrence.
	 *
	 * @param eventRecurrence the new event recurrence
	 */
	public void setEventRecurrence(EventRecurrence eventRecurrence) {
		this.eventRecurrence = eventRecurrence;
	}

	/**
	 * Gets the event instance exceptions.
	 *
	 * @return the event instance exceptions
	 */
	public List<EventInstanceException> getEventInstanceExceptions() {
		return eventInstanceExceptions;
	}

	/**
	 * Sets the event instance exceptions.
	 *
	 * @param eventInstanceExceptions the new event instance exceptions
	 */
	public void setEventInstanceExceptions(List<EventInstanceException> eventInstanceExceptions) {
		this.eventInstanceExceptions = eventInstanceExceptions;
	}

	/**
	 * Gets the event participants.
	 *
	 * @return the event participants
	 */
	public List<EventParticipant> getEventParticipants() {
		return eventParticipants;
	}

	/**
	 * Sets the event participants.
	 *
	 * @param eventParticipants the new event participants
	 */
	public void setEventParticipants(List<EventParticipant> eventParticipants) {
		this.eventParticipants = eventParticipants;
	}

}
