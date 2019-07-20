package com.wellme.notification.providers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SMSServiceProviderFactory {
	@Autowired
	TwilioSMSServiceProvider twilioSMSProvider;
	public SMSProvider getSMSProvider() {
		return twilioSMSProvider;
	}
}
