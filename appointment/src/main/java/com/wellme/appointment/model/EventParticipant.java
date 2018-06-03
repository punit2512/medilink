/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;

/**
 * The Class EventParticipant.
 */
public class EventParticipant implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/** The event id. */
	@Column(name = "EVENT_ID")
	private Long eventId;
	
	/** The participant id. */
	@Column(name = "PARTICIPANT_ID")
	private String participantId;
	
	/** The participation status. */
	@Column(name = "PARTICIPATION_STATUS")
	private String participationStatus;
	
	/** The participation status date. */
	@Column(name = "PARTICIPATION_STATUS_DT")
	private Date participationStatusDate;
	
	/** The participation status comments. */
	@Column(name = "PARTICIPATION_STATUS_COMMENTS")
	private String participationStatusComments;
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
	 * Instantiates a new event participant.
	 *
	 * @param eventId the event id
	 * @param participantId the participant id
	 * @param participationStatus the participation status
	 * @param participationStatusDate the participation status date
	 * @param participationStatusComments the participation status comments
	 * @param insTs the ins ts
	 * @param updTs the upd ts
	 * @param insLogin the ins login
	 * @param updLogin the upd login
	 * @param versionId the version id
	 * @param previousVersionId the previous version id
	 */
	public EventParticipant(Long eventId, String participantId, String participationStatus,
			Date participationStatusDate, String participationStatusComments, Date insTs, Date updTs, String insLogin,
			String updLogin, long versionId, long previousVersionId) {
		super();
		this.eventId = eventId;
		this.participantId = participantId;
		this.participationStatus = participationStatus;
		this.participationStatusDate = participationStatusDate;
		this.participationStatusComments = participationStatusComments;
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
	 * Gets the participant id.
	 *
	 * @return the participant id
	 */
	public String getParticipantId() {
		return participantId;
	}

	/**
	 * Sets the participant id.
	 *
	 * @param participantId the new participant id
	 */
	public void setParticipantId(String participantId) {
		this.participantId = participantId;
	}

	/**
	 * Gets the participation status.
	 *
	 * @return the participation status
	 */
	public String getParticipationStatus() {
		return participationStatus;
	}

	/**
	 * Sets the participation status.
	 *
	 * @param participationStatus the new participation status
	 */
	public void setParticipationStatus(String participationStatus) {
		this.participationStatus = participationStatus;
	}

	/**
	 * Gets the participation status date.
	 *
	 * @return the participation status date
	 */
	public Date getParticipationStatusDate() {
		return participationStatusDate;
	}

	/**
	 * Sets the participation status date.
	 *
	 * @param participationStatusDate the new participation status date
	 */
	public void setParticipationStatusDate(Date participationStatusDate) {
		this.participationStatusDate = participationStatusDate;
	}

	/**
	 * Gets the participation status comments.
	 *
	 * @return the participation status comments
	 */
	public String getParticipationStatusComments() {
		return participationStatusComments;
	}

	/**
	 * Sets the participation status comments.
	 *
	 * @param participationStatusComments the new participation status comments
	 */
	public void setParticipationStatusComments(String participationStatusComments) {
		this.participationStatusComments = participationStatusComments;
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
