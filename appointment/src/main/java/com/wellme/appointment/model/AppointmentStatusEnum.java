package com.wellme.appointment.model;

/**
 * The Enum AppointmentStatusEnum.
 */
public enum AppointmentStatusEnum {
	
	/** The requested. */
	REQUESTED("Requested"),
	
	/** The confirmed. */
	CONFIRMED("Confirmed"),
	
	/** The canceled. */
	CANCELED("Canceled"),
	
	/** The completed. */
	COMPLETED("Completed");
	
	/** The status. */
	private String status;
	
	/**
	 * Instantiates a new appointment status enum.
	 *
	 * @param status the status
	 */
	AppointmentStatusEnum(String status){
		this.status = status;
	}
	
	/**
	 * Gets the value.
	 *
	 * @return the value
	 */
	public String getValue(){
		return status;
	}
}
