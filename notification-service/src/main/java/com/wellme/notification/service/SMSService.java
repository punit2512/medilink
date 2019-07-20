package com.wellme.notification.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.twilio.twiml.messaging.Message;
import com.wellme.notification.providers.SMSProvider;
import com.wellme.notification.providers.SMSServiceProviderFactory;

@Component
public class SMSService {
	@Autowired
	SMSServiceProviderFactory smsProviderFactory;
	public String receiveAndRespond(Message message) {
		SMSProvider smsProvider = smsProviderFactory.getSMSProvider();
		return smsProvider.receiveAndRespondMessage(message);
	}
}
