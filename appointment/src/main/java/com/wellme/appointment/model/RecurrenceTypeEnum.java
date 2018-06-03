/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

/**
 * The Enum RecurrenceTypeEnum.
 */
public enum RecurrenceTypeEnum {
	
	/** The daily. */
	DAILY("Daily"),
	
	/** The weekly. */
	WEEKLY("Weekly"),
	
	/** The monthly. */
	MONTHLY("Monthly"),
	
	/** The yearly. */
	YEARLY("Yearly");
	
	/** The recurrence type. */
	String value;
	
	/**
	 * Instantiates a new recurrence type enum.
	 *
	 * @param recurrenceType the recurrence type
	 */
	RecurrenceTypeEnum(String value){
		this.value = value;
	}
	
	/**
	 * Gets the recurrence type.
	 *
	 * @return the recurrence type
	 */
	public String getValue(){
		return this.value;
	}
}
