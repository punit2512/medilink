package com.wellme.patient.factory;

import java.math.BigInteger;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.wellme.patient.id.provider.PatientAppointmentIdProvider;
import com.wellme.patient.model.PatientAppointment;

@Component
public class PatientAppointmentFactory {

	@Autowired
	PatientAppointmentIdProvider idProvider;
	
	public PatientAppointment createPatientAppointment(BigInteger patientId, BigInteger appointmentId,
			Date appointmentStartDate, Date appointmentEndDate, BigInteger practiceId, BigInteger consultantId,
			BigInteger insurancePlanId, BigInteger insuranceProviderId, Date insTs, String insLogin) {
		return new PatientAppointment(idProvider.getNextId(), patientId, appointmentId, appointmentStartDate, appointmentEndDate, practiceId, consultantId, insurancePlanId, insuranceProviderId, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE);
				
	}
}
