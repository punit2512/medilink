package com.wellme.notification.providers;
import org.springframework.stereotype.Component;

import com.twilio.twiml.MessagingResponse;
import com.twilio.twiml.messaging.Body;
import com.twilio.twiml.messaging.Message;

@Component
public class TwilioSMSServiceProvider implements SMSProvider {

	// Find your Account Sid and Auth Token at twilio.com/console
    public static final String ACCOUNT_SID =
            "AC0eb8a4b294cf64cadea953db84e3fb29";
    public static final String AUTH_TOKEN =
            "your_auth_token";


	@Override
	public void sendMessage(String message, String number) {
//		Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
//
//        Message message = Message
//                .creator(new PhoneNumber("+14159352345"), // to
//                        new PhoneNumber("+14158141829"), // from
//                        "Where's Wallace?")
//                .create();
//
//        System.out.println(message.getSid());
		
	}

	@Override
	public String receiveAndRespondMessage(Message message) {
		Body body = new Body
                .Builder("The Robots are coming! Head for the hills!")
                .build();
        Message sms = new Message
                .Builder()
                .body(body)
                .build();
        MessagingResponse twiml = new MessagingResponse
                .Builder()
                .message(sms)
                .build();
        return twiml.toXml();
	}
	
}
