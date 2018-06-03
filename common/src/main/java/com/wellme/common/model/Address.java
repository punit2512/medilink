/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * The Class Address.
 */
@JsonIgnoreProperties(value = { "insTs", "insLogin", "updTs", "updLogin", "versionId", "previosVersionId" })
public class Address extends BaseVO{
	
	/** The address line 1. */
	private String addressLine1;
	
	/** The address line 2. */
	private String addressLine2;
	
	/** The area. */
	private String area;
	
	/** The city. */
	private String city;
	
	/** The state. */
	private String state;
	
	/** The state code. */
	private String stateCode;
	
	/** The zip. */
	private String zip;
	
	/** The country. */
	private String country;
	
	/** The country code. */
	private String countryCode;
	
	/** The coordinates. */
	private Coordinates coordinates;
	
	/** The is primary. */
	private boolean isPrimary;
	
	public Address() {
		
	}
	
	public Address(String addressLine1, String addressLine2, String area, String city, String state, String stateCode,
			String zip, String country, String countryCode, Coordinates coordinates, boolean isPrimary) {
		super();
		this.addressLine1 = addressLine1;
		this.addressLine2 = addressLine2;
		this.area = area;
		this.city = city;
		this.state = state;
		this.stateCode = stateCode;
		this.zip = zip;
		this.country = country;
		this.countryCode = countryCode;
		this.coordinates = coordinates;
		this.isPrimary = isPrimary;
	}

	/**
	 * Gets the address line 1.
	 *
	 * @return the address line 1
	 */
	public String getAddressLine1() {
		return addressLine1;
	}
	
	/**
	 * Sets the address line 1.
	 *
	 * @param addressLine1 the new address line 1
	 */
	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}
	
	/**
	 * Gets the address line 2.
	 *
	 * @return the address line 2
	 */
	public String getAddressLine2() {
		return addressLine2;
	}
	
	/**
	 * Sets the address line 2.
	 *
	 * @param addressLine2 the new address line 2
	 */
	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
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
	 * @param area the new area
	 */
	public void setArea(String area) {
		this.area = area;
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
	 * @param city the new city
	 */
	public void setCity(String city) {
		this.city = city;
	}
	
	/**
	 * Gets the state.
	 *
	 * @return the state
	 */
	public String getState() {
		return state;
	}
	
	/**
	 * Sets the state.
	 *
	 * @param state the new state
	 */
	public void setState(String state) {
		this.state = state;
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
	 * @param zip the new zip
	 */
	public void setZip(String zip) {
		this.zip = zip;
	}
	
	/**
	 * Gets the country.
	 *
	 * @return the country
	 */
	public String getCountry() {
		return country;
	}
	
	/**
	 * Sets the country.
	 *
	 * @param country the new country
	 */
	public void setCountry(String country) {
		this.country = country;
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
	
	/**
	 * Checks if is primary.
	 *
	 * @return true, if is primary
	 */
	public boolean isPrimary() {
		return isPrimary;
	}
	
	/**
	 * Sets the primary.
	 *
	 * @param isPrimary the new primary
	 */
	public void setPrimary(boolean isPrimary) {
		this.isPrimary = isPrimary;
	}
	
	/**
	 * Gets the full address.
	 *
	 * @return the full address
	 */
	public String getFullAddress(){
		StringBuilder sb = new StringBuilder();
		sb.append(addressLine1.replace(" ", "+").replace(",", "+"));
		sb.append(addressLine2 != null ? addressLine2.replace(" ", "+").replace(",", "+") : "");
		sb.append(city.replace(" ", "+"));
		sb.append(stateCode);
		sb.append(countryCode);
		return sb.toString();
	}
}
