/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;



/**
 * The Class EventRecurrence.
 */
@Entity
@Table(name = "EVENT_RECURRENCE") 
public class EventRecurrence implements Serializable{
	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The event id. */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_recurrence_seq_generator")
	@SequenceGenerator(name="event_recurrence_seq_generator", sequenceName = "EVENT_RECURRENCE_SEQ", allocationSize=50)
	@Column(name = "EVENT_RECURRENCE_ID", updatable = false, nullable = false)
	/** The event id. */
	private Long eventRecurrenceId;
	
	/** The event id. */
	@Column(name = "EVENT_Id")
	private Long eventId;
	
	/** The recurrence type. */
	@Column(name = "RECURRENCE_TYP")
	private RecurrenceTypeEnum recurrenceType;
	
	/** The separation count. */
	@Column(name = "SEPERATION_COUNT")
	private int separationCount;
	
	/** The max occurences. */
	@Column(name = "MAX_OCCURENCES")
	private int maxOccurences;
	
	/** The days of week. */
	@Column(name = "DAYS_OF_WEEK")
	private String daysOfWeek;
	
	/** The weeks of month. */
	@Column(name = "WEEKS_OF_MONTH")
	private String weeksOfMonth;
	
	/** The days of month. */
	@Column(name = "DAYS_OF_MONTH")
	private String daysOfMonth;
	
	/** The months of year. */
	@Column(name = "MONTHS_OF_YEAR")
	private String monthsOfYear;
	
	/** The recurrence end date. */
	@Column(name = "RECURRENCE_END_DT")
	private Date recurrenceEndDate;
	
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

	/**
	 * Instantiates a new event recurrence.
	 *
	 * @param eventId the event id
	 * @param recurrenceType the recurrence type
	 * @param separationCount the separation count
	 * @param maxOccurences the max occurences
	 * @param daysOfWeek the days of week
	 * @param weeksOfMonth the weeks of month
	 * @param daysOfMonth the days of month
	 * @param monthsOfYear the months of year
	 * @param recurrenceEndDate the recurrence end date
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public EventRecurrence(Long eventId, RecurrenceTypeEnum recurrenceType, int separationCount,
			int maxOccurences, String daysOfWeek, String weeksOfMonth, String daysOfMonth, String monthsOfYear,
			Date recurrenceEndDate, Date insTs, Date updTs, String insLogin, String updLogin, long versionId,
			long previousVersionId) {
		super();
		this.eventId = eventId;
		this.recurrenceType = recurrenceType;
		this.separationCount = separationCount;
		this.maxOccurences = maxOccurences;
		this.daysOfWeek = daysOfWeek;
		this.weeksOfMonth = weeksOfMonth;
		this.daysOfMonth = daysOfMonth;
		this.monthsOfYear = monthsOfYear;
		this.recurrenceEndDate = recurrenceEndDate;
		this.insTs = insTs;
		this.updTs = updTs;
		this.insLogin = insLogin;
		this.updLogin = updLogin;
		this.versionId = versionId;
		this.previousVersionId = previousVersionId;
	}

	/**
	 * Gets the event recurrence id.
	 *
	 * @return the event recurrence id
	 */
	public Long getEventRecurrenceId() {
		return eventRecurrenceId;
	}

	/**
	 * Sets the event recurrence id.
	 *
	 * @param eventRecurrenceId the new event recurrence id
	 */
	public void setEventRecurrenceId(Long eventRecurrenceId) {
		this.eventRecurrenceId = eventRecurrenceId;
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
	 * Gets the recurrence type.
	 *
	 * @return the recurrence type
	 */
	public RecurrenceTypeEnum getRecurrenceType() {
		return recurrenceType;
	}

	/**
	 * Sets the recurrence type.
	 *
	 * @param recurrenceType the new recurrence type
	 */
	public void setRecurrenceType(RecurrenceTypeEnum recurrenceType) {
		this.recurrenceType = recurrenceType;
	}

	/**
	 * Gets the separation count.
	 *
	 * @return the separation count
	 */
	public int getSeparationCount() {
		return separationCount;
	}

	/**
	 * Sets the separation count.
	 *
	 * @param separationCount the new separation count
	 */
	public void setSeparationCount(int separationCount) {
		this.separationCount = separationCount;
	}

	/**
	 * Gets the max occurences.
	 *
	 * @return the max occurences
	 */
	public int getMaxOccurences() {
		return maxOccurences;
	}

	/**
	 * Sets the max occurences.
	 *
	 * @param maxOccurences the new max occurences
	 */
	public void setMaxOccurences(int maxOccurences) {
		this.maxOccurences = maxOccurences;
	}

	/**
	 * Gets the days of week.
	 *
	 * @return the days of week
	 */
	public String getDaysOfWeek() {
		return daysOfWeek;
	}

	/**
	 * Sets the days of week.
	 *
	 * @param daysOfWeek the new days of week
	 */
	public void setDaysOfWeek(String daysOfWeek) {
		this.daysOfWeek = daysOfWeek;
	}

	/**
	 * Gets the weeks of month.
	 *
	 * @return the weeks of month
	 */
	public String getWeeksOfMonth() {
		return weeksOfMonth;
	}

	/**
	 * Sets the weeks of month.
	 *
	 * @param weeksOfMonth the new weeks of month
	 */
	public void setWeeksOfMonth(String weeksOfMonth) {
		this.weeksOfMonth = weeksOfMonth;
	}

	/**
	 * Gets the days of month.
	 *
	 * @return the days of month
	 */
	public String getDaysOfMonth() {
		return daysOfMonth;
	}

	/**
	 * Sets the days of month.
	 *
	 * @param daysOfMonth the new days of month
	 */
	public void setDaysOfMonth(String daysOfMonth) {
		this.daysOfMonth = daysOfMonth;
	}

	/**
	 * Gets the months of year.
	 *
	 * @return the months of year
	 */
	public String getMonthsOfYear() {
		return monthsOfYear;
	}

	/**
	 * Sets the months of year.
	 *
	 * @param monthsOfYear the new months of year
	 */
	public void setMonthsOfYear(String monthsOfYear) {
		this.monthsOfYear = monthsOfYear;
	}

	/**
	 * Gets the recurrence end date.
	 *
	 * @return the recurrence end date
	 */
	public Date getRecurrenceEndDate() {
		return recurrenceEndDate;
	}

	/**
	 * Sets the recurrence end date.
	 *
	 * @param recurrenceEndDate the new recurrence end date
	 */
	public void setRecurrenceEndDate(Date recurrenceEndDate) {
		this.recurrenceEndDate = recurrenceEndDate;
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
}
