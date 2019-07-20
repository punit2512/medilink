/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;


/**
 * The Class Event.
 */
@Entity
@Table(name = "EVENT") 
public class Event implements Serializable{
	
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The event id. */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_seq_generator")
	@SequenceGenerator(name="event_seq_generator", sequenceName = "EVENT_SEQ", allocationSize=50)
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
	private String isFullDateEvent;
	
	/** The is recurring event. */
	@Column(name = "IS_RECURRING")
	private String isRecurringEvent;
	
	/** The event location. */
	@Column(name="EVENT_LOCATION")
	private String eventLocation;
	
	/** The event status. */
	@Column(name="EVENT_STATUS")
	private String eventStatus;
	
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
	@Transient
	private long previousVersionId;
	
	/** The event recurrence. */
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name="EVENT_ID")
	private EventRecurrence eventRecurrence;
	
	/** The event instance exceptions. */
	@OneToMany(cascade = {CascadeType.ALL})
	@JoinColumn(name="EVENT_ID")
	private List<EventInstanceException> eventInstanceExceptions;
	
	/** The event participants. */
	@OneToMany(cascade = {CascadeType.ALL})
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
	 * @param eventStatus the event status
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public Event(String eventName, String eventDescription, Date startDateTime, Date endDateTime,
			String isFullDateEvent, String isRecurringEvent, String eventLocation, String eventStatus, Date insTs, Date updTs, String insLogin, String updLogin,
			long versionId, long previousVersionId) {
		super();
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.startDateTime = startDateTime;
		this.endDateTime = endDateTime;
		this.isFullDateEvent = isFullDateEvent;
		this.isRecurringEvent = isRecurringEvent;
		this.eventLocation = eventLocation;
		this.eventStatus = eventStatus;
		this.insTs = insTs;
		this.updTs = updTs;
		this.insLogin = insLogin;
		this.updLogin = updLogin;
		this.versionId = versionId;
		this.previousVersionId = previousVersionId;
	}

	/**
	 * Instantiates a new event.
	 *
	 * @param eventId the event id
	 * @param eventName the event name
	 * @param eventDescription the event description
	 * @param startDateTime the start date time
	 * @param endDateTime the end date time
	 * @param isFullDateEvent the is full date event
	 * @param isRecurringEvent the is recurring event
	 * @param eventLocation the event location
	 * @param eventStatus the event status
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public Event(Long eventId, String eventName, String eventDescription, Date startDateTime, Date endDateTime,
			String isFullDateEvent, String isRecurringEvent, String eventLocation, String eventStatus, Date insTs, Date updTs, String insLogin, String updLogin,
			long versionId, long previousVersionId) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.startDateTime = startDateTime;
		this.endDateTime = endDateTime;
		this.isFullDateEvent = isFullDateEvent;
		this.isRecurringEvent = isRecurringEvent;
		this.eventLocation = eventLocation;
		this.eventStatus = eventStatus;
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
	public String isFullDateEvent() {
		return isFullDateEvent;
	}
	
	/**
	 * Sets the full date event.
	 *
	 * @param isFullDateEvent the new full date event
	 */
	public void setFullDateEvent(String isFullDateEvent) {
		this.isFullDateEvent = isFullDateEvent;
	}
	
	/**
	 * Checks if is recurring event.
	 *
	 * @return true, if is recurring event
	 */
	public String isRecurringEvent() {
		return isRecurringEvent;
	}
	
	/**
	 * Sets the recurring event.
	 *
	 * @param isRecurringEvent the new recurring event
	 */
	public void setRecurringEvent(String isRecurringEvent) {
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

	/**
	 * Gets the event status.
	 *
	 * @return the event status
	 */
	public String getEventStatus() {
		return eventStatus;
	}

	/**
	 * Sets the event status.
	 *
	 * @param eventStatus the new event status
	 */
	public void setEventStatus(String eventStatus) {
		this.eventStatus = eventStatus;
	}

}
