package com.wellme.practice.object.factory;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.common.model.Address;
import com.wellme.common.model.Phone;
import com.wellme.common.model.Qualification;
import com.wellme.common.model.SocialProfile;
import com.wellme.practice.id.generator.ConsultantIdProvider;
import com.wellme.practice.model.BoardCertificate;
import com.wellme.practice.model.Consultant;
@Component
public class ConsultantFactory {
	@Autowired
	ConsultantIdProvider idProvider;

	public Consultant createConsultant(String userName, String firstName, String lastName, String middleName,
			String profilePicUrl, List<String> emails, List<String> pictureUrls, List<Address> addresses,
			List<Phone> phones, List<SocialProfile> socialProfiles, String userFullName, List<BigInteger> specialityIds,
			List<Qualification> qualifications, List<BoardCertificate> boardCertificates, List<BigInteger> practiceIds, String profile, int appointmentDurationInMins, List<BigInteger> insurancePlanIds, String NPI,
			String gender, Date insTs, Date updTs, String insLogin, String updLogin) {
		return new Consultant(idProvider.getNextId(), userName, firstName, lastName, middleName, profilePicUrl, emails,
				pictureUrls, addresses, phones, socialProfiles, userFullName, gender, NPI, specialityIds, qualifications, boardCertificates, practiceIds, profile,
				appointmentDurationInMins, insurancePlanIds, insTs, updTs, insLogin, updLogin, 0L, Long.MIN_VALUE);
	}

	public Consultant updateConsultant() {
		return null;
	}
}
