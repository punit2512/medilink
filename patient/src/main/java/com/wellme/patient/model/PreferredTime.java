package com.wellme.patient.model;

import com.wellme.common.BaseVO;

// TODO: Auto-generated Javadoc
/**
 * The Class PreferredTime.
 */
public class PreferredTime extends BaseVO{
	
	/** The hour. */
	private String hour;
	
	/** The minute. */
	private String minute;
	
	/** The Day. */
	private String Day;
	
	/**
	 * Gets the hour.
	 *
	 * @return the hour
	 */
	public String getHour() {
		return hour;
	}
	
	/**
	 * Sets the hour.
	 *
	 * @param hour the new hour
	 */
	public void setHour(String hour) {
		this.hour = hour;
	}
	
	/**
	 * Gets the minute.
	 *
	 * @return the minute
	 */
	public String getMinute() {
		return minute;
	}
	
	/**
	 * Sets the minute.
	 *
	 * @param minute the new minute
	 */
	public void setMinute(String minute) {
		this.minute = minute;
	}
	
	/**
	 * Gets the day.
	 *
	 * @return the day
	 */
	public String getDay() {
		return Day;
	}
	
	/**
	 * Sets the day.
	 *
	 * @param day the new day
	 */
	public void setDay(String day) {
		Day = day;
	}
}
