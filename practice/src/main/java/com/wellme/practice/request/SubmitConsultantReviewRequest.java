/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.practice.request;

import java.math.BigInteger;
import java.util.Date;

/**
 * The Class SubmitConsultantReviewRequest.
 */
public class SubmitConsultantReviewRequest {
	/** The consultant id. */
	private BigInteger consultantId;
	
	/** The reviewed by. */
	private String reviewedBy;
	
	/** The reviewed on. */
	private Date reviewedOn;
	
	/** The review rating. */
	private int reviewRating;
	
	/** The review comments. */
	private String reviewComments;

	/**
	 * Instantiates a new submit consultant review request.
	 *
	 * @param consultantId the consultant id
	 * @param reviewedBy the reviewed by
	 * @param reviewedOn the reviewed on
	 * @param reviewRating the review rating
	 * @param reviewComments the review comments
	 */
	public SubmitConsultantReviewRequest(BigInteger consultantId, String reviewedBy, Date reviewedOn, int reviewRating,
			String reviewComments) {
		super();
		this.consultantId = consultantId;
		this.reviewedBy = reviewedBy;
		this.reviewedOn = reviewedOn;
		this.reviewRating = reviewRating;
		this.reviewComments = reviewComments;
	}

	/**
	 * Gets the consultant id.
	 *
	 * @return the consultant id
	 */
	public BigInteger getConsultantId() {
		return consultantId;
	}

	/**
	 * Sets the consultant id.
	 *
	 * @param consultantId the new consultant id
	 */
	public void setConsultantId(BigInteger consultantId) {
		this.consultantId = consultantId;
	}

	/**
	 * Gets the reviewed by.
	 *
	 * @return the reviewed by
	 */
	public String getReviewedBy() {
		return reviewedBy;
	}

	/**
	 * Sets the reviewed by.
	 *
	 * @param reviewedBy the new reviewed by
	 */
	public void setReviewedBy(String reviewedBy) {
		this.reviewedBy = reviewedBy;
	}

	/**
	 * Gets the reviewed on.
	 *
	 * @return the reviewed on
	 */
	public Date getReviewedOn() {
		return reviewedOn;
	}

	/**
	 * Sets the reviewed on.
	 *
	 * @param reviewedOn the new reviewed on
	 */
	public void setReviewedOn(Date reviewedOn) {
		this.reviewedOn = reviewedOn;
	}

	/**
	 * Gets the review rating.
	 *
	 * @return the review rating
	 */
	public int getReviewRating() {
		return reviewRating;
	}

	/**
	 * Sets the review rating.
	 *
	 * @param reviewRating the new review rating
	 */
	public void setReviewRating(int reviewRating) {
		this.reviewRating = reviewRating;
	}

	/**
	 * Gets the review comments.
	 *
	 * @return the review comments
	 */
	public String getReviewComments() {
		return reviewComments;
	}

	/**
	 * Sets the review comments.
	 *
	 * @param reviewComments the new review comments
	 */
	public void setReviewComments(String reviewComments) {
		this.reviewComments = reviewComments;
	}
}
