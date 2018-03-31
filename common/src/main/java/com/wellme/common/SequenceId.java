/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * The Class SequenceId.
 */
/*
 db.sequence.insert({_id: "hosting",seq: 0})
 */
@Document(collection = "sequence")
public class SequenceId {

	/** The id. */
	@Id
	private String id;

	/** The seq. */
	private long seq;

	/**
	 * Gets the id.
	 *
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * Sets the id.
	 *
	 * @param id the new id
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * Gets the seq.
	 *
	 * @return the seq
	 */
	public long getSeq() {
		return seq;
	}

	/**
	 * Sets the seq.
	 *
	 * @param seq the new seq
	 */
	public void setSeq(long seq) {
		this.seq = seq;
	}

	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "SequenceId [id=" + id + ", seq=" + seq + "]";
	}

}
