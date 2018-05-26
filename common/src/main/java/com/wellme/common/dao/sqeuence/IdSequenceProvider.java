/*
 * Copyright. Do not copy any portion of this file.
 */
package com.wellme.common.dao.sqeuence;

import java.io.Serializable;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The Class IdSequenceProvider.
 *
 * @param <SeqType>
 *            the generic type
 */
public class IdSequenceProvider<SeqType extends Comparable<SeqType> & Serializable> {

	/** The Constant LOGGER. */
	private static final Logger LOGGER = LoggerFactory.getLogger(IdSequenceProvider.class);

	/** The executor. */
	private final ExecutorService executor;

	/** The cached ids holding queue. */
	private final LinkedBlockingQueue<SeqType> cachedIdsHoldingQueue = new LinkedBlockingQueue<>();

	/** The refill task. */
	private final CachedIdsRefillTask<SeqType> refillTask;

	/** The sequence identifier. */
	private final String sequenceIdentifier;

	/** The threshold. */
	private final int threshold;
	

	/**
	 * Instantiates a new id sequence provider.
	 *
	 * @param sequenceIdSource the sequence id source
	 * @param sequenceIdentifier            the sequence identifier
	 * @param threshold            the threshold
	 */
	public IdSequenceProvider(SequenceIdSource<SeqType> sequenceIdSource, String sequenceIdentifier, int cachedSeqSize, int threshold) {
		super();
		//TODO check for factory to be used as needed
		this.executor = Executors.newSingleThreadExecutor();
		this.refillTask = new CachedIdsRefillTask<SeqType>(sequenceIdSource, cachedIdsHoldingQueue, sequenceIdentifier, threshold, cachedSeqSize);
		this.sequenceIdentifier = sequenceIdentifier;
		this.threshold = threshold;
	}

	/**
	 * Gets the next id.
	 *
	 * @return the next id
	 */
	public SeqType getNextId() {
		try {
			if (cachedIdsHoldingQueue.size() < threshold) {
				executor.execute(refillTask);
			}
		} catch (Exception ex) {
			LOGGER.error("Unable to process refilling of the id for sequence identifier {}", sequenceIdentifier, ex);
		}
		try {
			//TODO Add time outs as needed
			SeqType id = cachedIdsHoldingQueue.poll(2, TimeUnit.MINUTES);
			return id;
		} catch (Exception ex) {
			LOGGER.error("Unable to get next id for sequence identifier {}", sequenceIdentifier, ex);
			throw new RuntimeException("Unable to get next id for sequence identifier");
		}

	}

	/**
	 * The Class CachedIdsRefillTask.
	 *
	 * @param <SeqType>
	 *            the generic type
	 */
	private static class CachedIdsRefillTask<SeqType extends Comparable<SeqType> & Serializable> implements Runnable {

		/** The sequence id source. */
		private final SequenceIdSource<SeqType> sequenceIdSource;

		/** The cached id queue. */
		private final BlockingQueue<SeqType> cachedIdQueue;

		/** The sequence identifier. */
		private final String sequenceIdentifier;

		/** The threshold. */
		private final int threshold;
		
		private final int cachedSeqSize;

		/**
		 * Instantiates a new cached ids refill task.
		 *
		 * @param sequenceIdSource
		 *            the sequence id source
		 * @param cachedIdQueue
		 *            the cached id queue
		 * @param sequenceIdentifier
		 *            the sequence identifier
		 * @param threshold
		 *            the threshold
		 */
		public CachedIdsRefillTask(SequenceIdSource<SeqType> sequenceIdSource, BlockingQueue<SeqType> cachedIdQueue,
				String sequenceIdentifier, int threshold, int cachedSeqSize) {
			super();
			this.sequenceIdSource = sequenceIdSource;
			this.cachedIdQueue = cachedIdQueue;
			this.sequenceIdentifier = sequenceIdentifier;
			this.threshold = threshold;
			this.cachedSeqSize = cachedSeqSize;
		}

		/*
		 * (non-Javadoc)
		 * 
		 * @see java.lang.Runnable#run()
		 */
		@Override
		public void run() {
			try {
				if (cachedIdQueue.size() < threshold) {
					cachedIdQueue.addAll(sequenceIdSource.getNextIds(sequenceIdentifier, cachedSeqSize));
				}
			} catch (Exception ex) {
				LOGGER.error("Unable to get next id for sequence identifier {}", sequenceIdentifier, ex);
				throw new RuntimeException("Unable to get next id for sequence identifier");
			}
		}

	}
}
