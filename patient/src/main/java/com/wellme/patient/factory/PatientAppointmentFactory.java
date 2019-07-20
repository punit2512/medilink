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
			BigInteger insurancePlanId, BigInteger insuranceProviderId, String status, Date insTs, String insLogin) {
		return new PatientAppointment(idProvider.getNextId(), patientId, appointmentId, appointmentStartDate, appointmentEndDate, practiceId, consultantId, insurancePlanId, insuranceProviderId, status, insTs, insTs, insLogin, insLogin, 0L, Long.MIN_VALUE);
				
	}
	
	public void updatePatientAppointment(PatientAppointment patientAppointment, Date appointmentStartDate, Date appointmentEndDate, BigInteger insurancePlanId, BigInteger insuranceProviderId, String status, Date updTs, String updLogin) {
		patientAppointment.setAppointmentStartDate(appointmentStartDate);
		patientAppointment.setAppointmentEndDate(appointmentEndDate);
		patientAppointment.setAppoointmentStatus(status);
		patientAppointment.setInsurancePlanId(insurancePlanId);
		patientAppointment.setInsuranceProviderId(insuranceProviderId);
		patientAppointment.setUpdLogin(updLogin);
		patientAppointment.setUpdTs(updTs);
		
	}
}
