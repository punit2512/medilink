package com.wellme.appointment.model;

/**
 * The Class AppointmentStatus.
 */
public class AppointmentStatus {
	
	/** The status. */
	private AppointmentStatusEnum status;
	
	/** The status description. */
	private String statusDescription;
	
	/**
	 * Gets the status.
	 *
	 * @return the status
	 */
	public AppointmentStatusEnum getStatus() {
		return status;
	}
	
	/**
	 * Sets the status.
	 *
	 * @param status the status to set
	 */
	public void setStatus(AppointmentStatusEnum status) {
		this.status = status;
	}
	
	/**
	 * Gets the status description.
	 *
	 * @return the statusDescription
	 */
	public String getStatusDescription() {
		return statusDescription;
	}
	
	/**
	 * Sets the status description.
	 *
	 * @param statusDescription the statusDescription to set
	 */
	public void setStatusDescription(String statusDescription) {
		this.statusDescription = statusDescription;
	}
}
