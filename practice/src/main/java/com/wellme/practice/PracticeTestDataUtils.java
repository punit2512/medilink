package com.wellme.practice;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.wellme.common.Address;
import com.wellme.common.Phone;
import com.wellme.common.Qualification;
import com.wellme.common.SocialProfile;
import com.wellme.practice.model.Consultant;
import com.wellme.practice.model.InsuranceProvider;
import com.wellme.practice.model.InsuranceType;
import com.wellme.practice.model.Practice;
import com.wellme.practice.model.Speciality;

public class PracticeTestDataUtils {
	
	private static final String[] CONSULTANT_NAMES = new String[]{"John D", "Nick Williams", "Christina Wells", "Mellisa Thomas", "Robert Nikson"};
	private static final String[] PRACTICE_NAMES = new String[]{"Happy Health Clinic", "Sure Smyle Clinic", "Wellness Polyclinic", "New Age Hospital", "Alchemist Hospital"};
	private static final String[] INSURANCE_PROVIDER_NAMES = new String[]{"National Insurance Company Ltd", "HealthWell Insurance Providers Ltd"};
	
	public static List<Practice> createPractice(int numPractices) {
		List<Practice> practices = new ArrayList<>();
		
		List<Speciality> specialities = createSpecialities();
		
		List<InsuranceProvider> insuranceProviders = createInsuranceProviders();
		List<Consultant> consultants = createConsultants(2, specialities);
		for (int i = 0; i < numPractices; i++) {
			String practiceName = PRACTICE_NAMES[i];
			Practice practice = new Practice();
			practice.setPracticeName(practiceName);
			practice.setPracticeDetails("Details for Practice" + practiceName);
			String practiceNameForProfile = practiceName.replaceAll("\\s",""); 
			List<Phone> phones = new ArrayList<>();
			Phone phone = new Phone();
			phone.setAreaCode("0124");
			phone.setCountryCode("+91");
			phone.setPhoneNumber("4382604");
			phone.setPhoneType("Home");
			phones.add(phone);
			Phone phone2 = new Phone();
			phone2.setPhoneNumber("9899779484");
			phone2.setPhoneType("Mobile");
			phones.add(phone2);
			practice.setPhones(phones);
			
			List<Address> addresses = new ArrayList<>();
			Address address = new Address();
			address.setAddressLine1("71 Pilgrim Avenue");
			address.setCity("Chevy Chase");
			address.setCountry("USA");
			address.setState("MD");
			address.setZip("20815");
			addresses.add(address);
			Address address2 = new Address();
			address2.setAddressLine1("514 S. Magnolia St.");
			address2.setCity("Orlando");
			address2.setCountry("USA");
			address2.setState("FL");
			address2.setZip("32806");
			addresses.add(address2);
			practice.setAddresses(addresses);
			
			practice.setInsuranceProviders(insuranceProviders);
			
			List<SocialProfile> socialProfiles = new ArrayList<>();
			SocialProfile socialProfileFB = new SocialProfile("Facebook", "fb"+practiceNameForProfile, "");
			SocialProfile socialProfileTwitter = new SocialProfile("Twitter", "tw"+practiceNameForProfile, "");
			socialProfiles.add(socialProfileFB);
			socialProfiles.add(socialProfileTwitter);
			practice.setSocialProfiles(socialProfiles);
			
			practice.setSpecialitiesSupported(specialities);
			
			
			practice.setConsultants(consultants);
			practices.add(practice);
		}
		return practices;
	}
	
	public static List<Speciality> createSpecialities(){
		List<Speciality> specialities = new ArrayList<>();
		Speciality speciality1 = new Speciality();
		speciality1.setSpecialityName("Arthopedics");
		Speciality speciality2 = new Speciality();
		speciality2.setSpecialityName("Gynecology");
		specialities.add(speciality1);
		specialities.add(speciality2);
		return specialities;
	}
	
	public static List<InsuranceProvider> createInsuranceProviders(){
		List<InsuranceProvider> insuranceProviders = new ArrayList<>();
		InsuranceProvider insuranceProvider = new InsuranceProvider();
		insuranceProvider.setInsuranceProviderName(INSURANCE_PROVIDER_NAMES[0]);
		List<InsuranceType> insuranceTypes = new ArrayList<>();
		InsuranceType insuranceType1 = new InsuranceType();
		insuranceType1.setInsuranceType("PPO");
		InsuranceType insuranceType2 = new InsuranceType();
		insuranceType2.setInsuranceType("HMO");
		insuranceTypes.add(insuranceType1);
		insuranceTypes.add(insuranceType2);
		insuranceProvider.setInsuranceTypes(insuranceTypes);
		
		InsuranceProvider insuranceProvider2 = new InsuranceProvider();
		insuranceProvider2.setInsuranceProviderName(INSURANCE_PROVIDER_NAMES[1]);
		List<InsuranceType> insuranceTypes2 = new ArrayList<>();
		InsuranceType insuranceType3 = new InsuranceType();
		insuranceType3.setInsuranceType("PP1");
		InsuranceType insuranceType4 = new InsuranceType();
		insuranceType4.setInsuranceType("HM1");
		insuranceTypes2.add(insuranceType3);
		insuranceTypes2.add(insuranceType4);
		insuranceProvider2.setInsuranceTypes(insuranceTypes2);
		insuranceProviders.add(insuranceProvider);
		insuranceProviders.add(insuranceProvider2);
		return insuranceProviders;
	}

	public static List<Consultant> createConsultants(int numConsultants, List<Speciality> specialities) {
		List<Consultant> consultants = new ArrayList<>();
		for (int i = 0; i < numConsultants; i++) {
			String consultantName = CONSULTANT_NAMES[i];
			String[] nameSplit = consultantName.split(" ");
			
			Consultant consultant = new Consultant();
			consultant.setFirstName(nameSplit[0]);
			consultant.setLastName(nameSplit[1]);
			
			consultant.setUserFullName(consultantName);
			String consultantNameForProfile = consultantName.replaceAll("\\s",""); 
			
			List<String> emails = new ArrayList<>();
			emails.add(consultantNameForProfile + "@email1.com");
			emails.add(consultantNameForProfile + "@email2.com");
			consultant.setEmails(emails);
			
			List<Phone> phones = new ArrayList<>();
			Phone phone = new Phone();
			phone.setAreaCode("617");
			phone.setCountryCode("+001");
			phone.setPhoneNumber("617-390-6716");
			phone.setPhoneType("Home");
			phones.add(phone);
			consultant.setPhones(phones);
			
			List<Address> addresses = new ArrayList<>();
			Address address = new Address();
			address.setAddressLine1("100 Cambridge Street");
			address.setArea("Cambridge");
			address.setCity("Cambridge");
			address.setCountry("USA");
			address.setState("MA");
			address.setZip("02110");
			addresses.add(address);
			consultant.setAddresses(addresses);
			
			List<SocialProfile> socialProfiles = new ArrayList<>();
			SocialProfile socialProfileFB = new SocialProfile("Facebook", "fb"+consultantNameForProfile, "");
			SocialProfile socialProfileTwitter = new SocialProfile("Twitter", "tw"+consultantNameForProfile, "");
			socialProfiles.add(socialProfileFB);
			socialProfiles.add(socialProfileTwitter);
			consultant.setSocialProfiles(socialProfiles);
			
			List<Qualification> qualifications = new ArrayList<>();
			Qualification qualification = new Qualification();
			qualification.setInstitute("Harward Medical College");
			qualification.setQualification("Dental Hygiene - MPH, M.Sc. ");
			qualifications.add(qualification);
			
			consultant.setQualifications(qualifications);
			consultant.setPictureUrls(Collections.singletonList("www.google.com/abc/pqr.jpg"));
			consultant.setProfilePicUrl("www.google.com/profiles/abc.jpg");
			
			consultant.setSpecialities(specialities);
			consultants.add(consultant);
		}
		return consultants;
	}
}
