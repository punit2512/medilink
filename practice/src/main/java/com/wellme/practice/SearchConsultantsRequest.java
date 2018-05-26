/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice;

import com.wellme.common.model.Coordinates;

/**
 * The Class SearchPracticesRequest.
 */
public class SearchConsultantsRequest {
	
	/** The practice name. */
	private String practiceName;
	
	/** The consultant name. */
	private String consultantName;
	
	/** The city. */
	private String city;
	
	/** The area. */
	private String area;
	
	/** The within miles. */
	private Integer withinMiles;
	
	/** The speciality. */
	private String speciality;
	
	/** The zip. */
	private String zip;
	
	/** The insurance provider. */
	private String insuranceProvider;
	
	/**  The insurance Type. */
	private String insuranceType;
	
	/** The coordinates. */
	private Coordinates coordinates;
	
	/**
	 * Gets the insurance type.
	 *
	 * @return the insurance type
	 */
	public String getInsuranceType() {
		return insuranceType;
	}

	/**
	 * Sets the insurance type.
	 *
	 * @param insuranceType the new insurance type
	 */
	public void setInsuranceType(String insuranceType) {
		this.insuranceType = insuranceType;
	}

	/**
	 * Gets the practice name.
	 *
	 * @return the practiceName
	 */
	public String getPracticeName() {
		return practiceName;
	}
	
	/**
	 * Sets the practice name.
	 *
	 * @param practiceName the practiceName to set
	 */
	public void setPracticeName(String practiceName) {
		this.practiceName = practiceName;
	}
	
	/**
	 * Gets the consultant name.
	 *
	 * @return the consultantName
	 */
	public String getConsultantName() {
		return consultantName;
	}
	
	/**
	 * Sets the consultant name.
	 *
	 * @param consultantName the consultantName to set
	 */
	public void setConsultantName(String consultantName) {
		this.consultantName = consultantName;
	}
	
	/**
	 * Gets the city.
	 *
	 * @return the city
	 */
	public String getCity() {
		return city;
	}
	
	/**
	 * Sets the city.
	 *
	 * @param city the city to set
	 */
	public void setCity(String city) {
		this.city = city;
	}
	
	/**
	 * Gets the area.
	 *
	 * @return the area
	 */
	public String getArea() {
		return area;
	}
	
	/**
	 * Sets the area.
	 *
	 * @param area the area to set
	 */
	public void setArea(String area) {
		this.area = area;
	}
	
	/**
	 * Gets the within miles.
	 *
	 * @return the withinMiles
	 */
	public Integer getWithinMiles() {
		return withinMiles;
	}
	
	/**
	 * Sets the within miles.
	 *
	 * @param withinMiles the withinMiles to set
	 */
	public void setWithinMiles(Integer withinMiles) {
		this.withinMiles = withinMiles;
	}
	
	/**
	 * Gets the speciality.
	 *
	 * @return the speciality
	 */
	public String getSpeciality() {
		return speciality;
	}
	
	/**
	 * Sets the speciality.
	 *
	 * @param speciality the speciality to set
	 */
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	/**
	 * Gets the zip.
	 *
	 * @return the zip
	 */
	public String getZip() {
		return zip;
	}
	
	/**
	 * Sets the zip.
	 *
	 * @param zip the zip to set
	 */
	public void setZip(String zip) {
		this.zip = zip;
	}
	
	/**
	 * Gets the insurance provider.
	 *
	 * @return the insuranceProvider
	 */
	public String getInsuranceProvider() {
		return insuranceProvider;
	}
	
	/**
	 * Sets the insurance provider.
	 *
	 * @param insuranceProvider the insuranceProvider to set
	 */
	public void setInsuranceProvider(String insuranceProvider) {
		this.insuranceProvider = insuranceProvider;
	}

	/**
	 * Gets the coordinates.
	 *
	 * @return the coordinates
	 */
	public Coordinates getCoordinates() {
		return coordinates;
	}

	/**
	 * Sets the coordinates.
	 *
	 * @param coordinates the new coordinates
	 */
	public void setCoordinates(Coordinates coordinates) {
		this.coordinates = coordinates;
	}
	
}
