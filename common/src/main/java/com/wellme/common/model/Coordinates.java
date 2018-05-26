/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The Class Coordinates.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class Coordinates extends BaseVO{



	/** The lattitude. */
	private double lattitude;
	
	/** The longitude. */
	private double longitude;
	
	/**
	 * Instantiates a new coordinates.
	 */
	public Coordinates() {
		super();
	}
	
	/**
	 * Instantiates a new coordinates.
	 *
	 * @param lattitude the lattitude
	 * @param longitude the longitude
	 */
	public Coordinates(double lattitude, double longitude) {
		super();
		this.lattitude = lattitude;
		this.longitude = longitude;
	}

	/**
	 * Gets the lattitude.
	 *
	 * @return the lattitude
	 */
	public double getLattitude() {
		return lattitude;
	}

	/**
	 * Sets the lattitude.
	 *
	 * @param lattitude the new lattitude
	 */
	public void setLattitude(double lattitude) {
		this.lattitude = lattitude;
	}

	/**
	 * Gets the longitude.
	 *
	 * @return the longitude
	 */
	public double getLongitude() {
		return longitude;
	}

	/**
	 * Sets the longitude.
	 *
	 * @param longitude the new longitude
	 */
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
}
