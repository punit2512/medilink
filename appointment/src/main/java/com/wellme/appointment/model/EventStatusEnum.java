/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.appointment.model;

/**
 * The Enum EventStatusEnum.
 */
public enum EventStatusEnum {
	
	/** The new. */
	NEW("NEW"),
	
	/** The updated. */
	UPDATED("UPDATED"),
	
	/** The canceled. */
	CANCELED("CANCELED");
	
	/** The value. */
	String value;
	
	/**
	 * Instantiates a new event status enum.
	 *
	 * @param value the value
	 */
	EventStatusEnum(String value){
		this.value = value;
	}
	
	/**
	 * Gets the value.
	 *
	 * @return the value
	 */
	public String getValue() {
		return this.value;
	}
	
}
