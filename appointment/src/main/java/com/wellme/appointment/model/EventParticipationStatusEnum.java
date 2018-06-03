package com.wellme.appointment.model;

public enum EventParticipationStatusEnum {
	TENTATIVE("Tentative"),
	ACCEPTED("Accepted"),
	DECLINED("Decliend");
	
	private  String value;
	
	EventParticipationStatusEnum(String value){
		this.value = value;
	}
	
	public String getValue(){
		return this.value;
	}
	
}
