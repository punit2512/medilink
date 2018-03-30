/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.dao.sqeuence;

/**
 * The Class SequenceException.
 */
public class SequenceException extends RuntimeException {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

	/** The err code. */
	private String errCode;
	
	/** The err msg. */
	private String errMsg;

	/**
	 * Gets the err code.
	 *
	 * @return the err code
	 */
	public String getErrCode() {
		return errCode;
	}

	/**
	 * Sets the err code.
	 *
	 * @param errCode the new err code
	 */
	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	/**
	 * Gets the err msg.
	 *
	 * @return the err msg
	 */
	public String getErrMsg() {
		return errMsg;
	}

	/**
	 * Sets the err msg.
	 *
	 * @param errMsg the new err msg
	 */
	public void setErrMsg(String errMsg) {
		this.errMsg = errMsg;
	}

	/**
	 * Instantiates a new sequence exception.
	 *
	 * @param errCode the err code
	 * @param errMsg the err msg
	 */
	public SequenceException(String errCode, String errMsg) {
		this.errCode = errCode;
		this.errMsg = errMsg;
	}

	/**
	 * Instantiates a new sequence exception.
	 *
	 * @param errMsg the err msg
	 */
	public SequenceException(String errMsg) {
		this.errMsg = errMsg;
	}

}