/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.model;

/**
 * The Class PracticeConsultantKey.
 */
public class PracticeConsultantKey extends BaseVO{

	/** The practice id. */
	private String practiceId;
	
	/** The consultant id. */
	private String consultantId;
	
	/**
	 * Instantiates a new practice consultant key.
	 *
	 * @param practiceId the practice id
	 * @param consultantId the consultant id
	 */
	public PracticeConsultantKey(String practiceId, String consultantId) {
		super();
		this.practiceId = practiceId;
		this.consultantId = consultantId;
	}
	
	/**
	 * Gets the practice id.
	 *
	 * @return the practice id
	 */
	public String getPracticeId() {
		return practiceId;
	}
	
	/**
	 * Sets the practice id.
	 *
	 * @param practiceId the new practice id
	 */
	public void setPracticeId(String practiceId) {
		this.practiceId = practiceId;
	}
	
	/**
	 * Gets the consultant id.
	 *
	 * @return the consultant id
	 */
	public String getConsultantId() {
		return consultantId;
	}
	
	/**
	 * Sets the consultant id.
	 *
	 * @param consultantId the new consultant id
	 */
	public void setConsultantId(String consultantId) {
		this.consultantId = consultantId;
	}
	
	public String toString(){
		return this.practiceId + "-" + this.consultantId;
	}
	
}
