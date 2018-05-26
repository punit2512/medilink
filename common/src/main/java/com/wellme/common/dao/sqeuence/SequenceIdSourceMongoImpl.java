package com.wellme.common.dao.sqeuence;


import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.FindAndModifyOptions;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.wellme.common.model.SequenceId;

@Component
public class SequenceIdSourceMongoImpl implements SequenceIdSource<BigInteger> {


	@Autowired
	private MongoOperations mongoOperation;

	@Override
	public List<BigInteger> getNextIds(String sequenceIdentifier, int cachedSize) throws SequenceException {

		Query query = new Query(Criteria.where("_id").is(sequenceIdentifier));
		List<BigInteger> ids = new ArrayList<>();
		for (int i = 0; i < cachedSize; i++) {
			Update update = new Update();
			update.inc("seq", 1);

			FindAndModifyOptions options = new FindAndModifyOptions();
			options.returnNew(true);

			SequenceId seqId = mongoOperation.findAndModify(query, update, options, SequenceId.class);

			if (seqId == null) {
				throw new SequenceException("Unable to get sequence id for key : " + sequenceIdentifier);
			}

			ids.add(seqId.getSeq());
		}
		
		return ids;

	}

}