package com.wellme.common.dao.sqeuence;

public interface SequenceDao {

	long getNextSequenceId(String key) throws SequenceException;

}