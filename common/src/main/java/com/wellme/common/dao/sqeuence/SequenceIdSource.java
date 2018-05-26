package com.wellme.common.dao.sqeuence;

import java.io.Serializable;
import java.util.List;

public interface SequenceIdSource<SeqType extends Comparable<SeqType> & Serializable> {

	List<SeqType> getNextIds(String sequenceIdentifier, int cachedSeqSize) throws SequenceException;

}