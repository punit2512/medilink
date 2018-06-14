/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.patient.model;

import java.io.Serializable;
import java.util.Date;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.wellme.common.util.CustomJsonDateDeserializer;

/**
 * The Class AppointmentParticipantDto.
 */
public class AppointmentParticipantDto implements Serializable {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The participant id. */
	private String participantId;

	/** The participant type. */
	private String participantType;

	/** The participation status. */
	private String participationStatus;

	/** The participation status date. */
	/** The appointment start date. */
	@JsonDeserialize(using = CustomJsonDateDeserializer.class)
	private Date participationStatusDate;

	/** The participation status comments. */
	private String participationStatusComments;

	/** The version id. */
	private Long versionId;
	
	public AppointmentParticipantDto() {
		
	}

	/**
	 * Instantiates a new appointment participant dto.
	 *
	 * @param participantId
	 *            the participant id
	 * @param participantType
	 *            the participant type
	 * @param participationStatus
	 *            the participation status
	 * @param participationStatusDate
	 *            the participation status date
	 * @param participationStatusComments
	 *            the participation status comments
	 * @param versionId
	 *            the version id
	 */
	public AppointmentParticipantDto(String participantId, String participantType, String participationStatus,
			Date participationStatusDate, String participationStatusComments, Long versionId) {
		super();
		this.participantId = participantId;
		this.participantType = participantType;
		this.participationStatus = participationStatus;
		this.participationStatusDate = participationStatusDate;
		this.participationStatusComments = participationStatusComments;
		this.versionId = versionId;
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
	 * @param participantId
	 *            the new participant id
	 */
	public void setParticipantId(String participantId) {
		this.participantId = participantId;
	}

	/**
	 * Gets the participant type.
	 *
	 * @return the participant type
	 */
	public String getParticipantType() {
		return participantType;
	}

	/**
	 * Sets the participant type.
	 *
	 * @param participantType
	 *            the new participant type
	 */
	public void setParticipantType(String participantType) {
		this.participantType = participantType;
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
	 * @param participationStatus
	 *            the new participation status
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
	 * @param participationStatusDate
	 *            the new participation status date
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
	 * @param participationStatusComments
	 *            the new participation status comments
	 */
	public void setParticipationStatusComments(String participationStatusComments) {
		this.participationStatusComments = participationStatusComments;
	}

	/**
	 * Gets the version id.
	 *
	 * @return the version id
	 */
	public Long getVersionId() {
		return versionId;
	}

	/**
	 * Sets the version id.
	 *
	 * @param versionId
	 *            the new version id
	 */
	public void setVersionId(Long versionId) {
		this.versionId = versionId;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((participantId == null) ? 0 : participantId.hashCode());
		result = prime * result + ((participantType == null) ? 0 : participantType.hashCode());
		result = prime * result + ((participationStatus == null) ? 0 : participationStatus.hashCode());
		result = prime * result + ((participationStatusComments == null) ? 0 : participationStatusComments.hashCode());
		result = prime * result + ((participationStatusDate == null) ? 0 : participationStatusDate.hashCode());
		result = prime * result + ((versionId == null) ? 0 : versionId.hashCode());
		return result;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AppointmentParticipantDto other = (AppointmentParticipantDto) obj;
		if (participantId == null) {
			if (other.participantId != null)
				return false;
		} else if (!participantId.equals(other.participantId))
			return false;
		if (participantType == null) {
			if (other.participantType != null)
				return false;
		} else if (!participantType.equals(other.participantType))
			return false;
		if (participationStatus == null) {
			if (other.participationStatus != null)
				return false;
		} else if (!participationStatus.equals(other.participationStatus))
			return false;
		if (participationStatusComments == null) {
			if (other.participationStatusComments != null)
				return false;
		} else if (!participationStatusComments.equals(other.participationStatusComments))
			return false;
		if (participationStatusDate == null) {
			if (other.participationStatusDate != null)
				return false;
		} else if (!participationStatusDate.equals(other.participationStatusDate))
			return false;
		if (versionId == null) {
			if (other.versionId != null)
				return false;
		} else if (!versionId.equals(other.versionId))
			return false;
		return true;
	}

}
