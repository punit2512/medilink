/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

import org.springframework.data.annotation.Id;

/**
 * The Class EventInstanceException.
 */
public class EventInstanceException implements Serializable{

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;
	
	/** The event instance exception id. */
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "event_instance_exception_seq_generator")
	@SequenceGenerator(name="event_instance_exception_seq_generator", sequenceName = "event_instance_exception_seq", allocationSize=50)
	@Column(name = "EVENT_INSTANCE_EXCEPTION_ID", updatable = false, nullable = false)
	private Long eventInstanceExceptionId;
	
	/** The event id. */
	@Column(name = "EVENT_ID")
	private Long eventId;
	
	/** The is rescheduled. */
	@Column(name = "IS_RESCHEDULED")
	private boolean isRescheduled;
	
	/** The is canceled. */
	@Column(name = "IS_CANCELED")
	private boolean isCanceled;
	
	/** The start date. */
	@Column(name = "START_DT")
	private Date startDate;
	
	/** The end date. */
	@Column(name = "END_DT")
	private Date endDate;
	
	/** The is full day. */
	@Column(name = "IS_FULL_DAY_EVENT")
	private boolean isFullDay;
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

	/**
	 * Instantiates a new event instance exception.
	 *
	 * @param eventId the event id
	 * @param isRescheduled the is rescheduled
	 * @param isCanceled the is canceled
	 * @param startDate the start date
	 * @param endDate the end date
	 * @param isFullDay the is full day
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public EventInstanceException(Long eventId, boolean isRescheduled,
			boolean isCanceled, Date startDate, Date endDate, boolean isFullDay, Date insTs, Date updTs,
			String insLogin, String updLogin, long versionId, long previousVersionId) {
		super();
		this.eventId = eventId;
		this.isRescheduled = isRescheduled;
		this.isCanceled = isCanceled;
		this.startDate = startDate;
		this.endDate = endDate;
		this.isFullDay = isFullDay;
		this.insTs = insTs;
		this.updTs = updTs;
		this.insLogin = insLogin;
		this.updLogin = updLogin;
		this.versionId = versionId;
		this.previousVersionId = previousVersionId;
	}

	/**
	 * Gets the event instance exception id.
	 *
	 * @return the event instance exception id
	 */
	public Long getEventInstanceExceptionId() {
		return eventInstanceExceptionId;
	}

	/**
	 * Sets the event instance exception id.
	 *
	 * @param eventInstanceExceptionId the new event instance exception id
	 */
	public void setEventInstanceExceptionId(Long eventInstanceExceptionId) {
		this.eventInstanceExceptionId = eventInstanceExceptionId;
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
	 * Checks if is rescheduled.
	 *
	 * @return true, if is rescheduled
	 */
	public boolean isRescheduled() {
		return isRescheduled;
	}

	/**
	 * Sets the rescheduled.
	 *
	 * @param isRescheduled the new rescheduled
	 */
	public void setRescheduled(boolean isRescheduled) {
		this.isRescheduled = isRescheduled;
	}

	/**
	 * Checks if is canceled.
	 *
	 * @return true, if is canceled
	 */
	public boolean isCanceled() {
		return isCanceled;
	}

	/**
	 * Sets the canceled.
	 *
	 * @param isCanceled the new canceled
	 */
	public void setCanceled(boolean isCanceled) {
		this.isCanceled = isCanceled;
	}

	/**
	 * Gets the start date.
	 *
	 * @return the start date
	 */
	public Date getStartDate() {
		return startDate;
	}

	/**
	 * Sets the start date.
	 *
	 * @param startDate the new start date
	 */
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * Gets the end date.
	 *
	 * @return the end date
	 */
	public Date getEndDate() {
		return endDate;
	}

	/**
	 * Sets the end date.
	 *
	 * @param endDate the new end date
	 */
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * Checks if is full day.
	 *
	 * @return true, if is full day
	 */
	public boolean isFullDay() {
		return isFullDay;
	}

	/**
	 * Sets the full day.
	 *
	 * @param isFullDay the new full day
	 */
	public void setFullDay(boolean isFullDay) {
		this.isFullDay = isFullDay;
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
