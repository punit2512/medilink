package com.wellme.notification.providers;

import com.twilio.twiml.messaging.Message;

public interface SMSProvider {
	void sendMessage(String message, String number);
	String receiveAndRespondMessage(Message message);
}
