package com.wellme.patient.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.common.model.SocialProfile;
import com.wellme.common.model.User;

// TODO: Auto-generated Javadoc
/**
 * The Class Patient.
 */
@Document(collection="patients")
public class Patient extends User{

	/** The patient id. */
	@Id
	private BigInteger patientId;
	
	/** The preferred times. */
	private List<PreferredTime> preferredTimes;

	
	
	public Patient(BigInteger patientId, String userName, String firstName, String lastName, String middleName,
			String profilePicUrl, List<String> emails, List<String> pictureUrls, List<Address> addresses,
			List<Phone> phones, List<SocialProfile> socialProfiles, String userFullName, String gender, Date insTs,
			Date updTs, String insLogin, String updLogin, long versionId, long previosVersionId,
			List<PreferredTime> preferredTimes) {
		super(patientId, userName, firstName, lastName, middleName, profilePicUrl, emails, pictureUrls, addresses, phones,
				socialProfiles, userFullName, gender, insTs, updTs, insLogin, updLogin, versionId, previosVersionId);
		this.patientId = patientId;
		this.preferredTimes = preferredTimes;
	}
	
	
	

	/**
	 * Gets the patient id.
	 *
	 * @return the patient id
	 */
	public BigInteger getPatientId() {
		return patientId;
	}
	
	/**
	 * Sets the patient id.
	 *
	 * @param patientId the new patient id
	 */
	public void setPatientId(BigInteger patientId) {
		this.patientId = patientId;
	}
	
	/**
	 * Gets the preferred times.
	 *
	 * @return the preferred times
	 */
	public List<PreferredTime> getPreferredTimes() {
		return preferredTimes;
	}
	
	/**
	 * Sets the preferred times.
	 *
	 * @param preferredTimes the new preferred times
	 */
	public void setPreferredTimes(List<PreferredTime> preferredTimes) {
		this.preferredTimes = preferredTimes;
	}
	
}
