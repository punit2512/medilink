/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

/**
 * The Class Qualification.
 */
public class Qualification extends BaseVO{
	
	/** The qualification. */
	private String qualification;
	
	/** The field. */
	private String field;
	
	/** The institute. */
	private Institute institute;
	
	/** The year. */
	private int year;
	
	/**
	 * Instantiates a new qualification.
	 *
	 * @param qualification the qualification
	 * @param field the field
	 * @param institute the institute
	 * @param year the year
	 */
	public Qualification(String qualification, String field, Institute institute, int year) {
		super();
		this.qualification = qualification;
		this.field = field;
		this.institute = institute;
		this.year = year;
	}

	
	/**
	 * Gets the qualification.
	 *
	 * @return the qualification
	 */
	public String getQualification() {
		return qualification;
	}
	
	/**
	 * Sets the qualification.
	 *
	 * @param qualification the new qualification
	 */
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	
	/**
	 * Gets the institute.
	 *
	 * @return the institute
	 */
	public Institute getInstitute() {
		return institute;
	}
	
	/**
	 * Sets the institute.
	 *
	 * @param institute the new institute
	 */
	public void setInstitute(Institute institute) {
		this.institute = institute;
	}
	
	/**
	 * Gets the year.
	 *
	 * @return the year
	 */
	public int getYear() {
		return year;
	}
	
	/**
	 * Sets the year.
	 *
	 * @param year the new year
	 */
	public void setYear(int year) {
		this.year = year;
	}
	
	/**
	 * Gets the field.
	 *
	 * @return the field
	 */
	public String getField() {
		return field;
	}
	
	/**
	 * Sets the field.
	 *
	 * @param field the new field
	 */
	public void setField(String field) {
		this.field = field;
	}
	
}
