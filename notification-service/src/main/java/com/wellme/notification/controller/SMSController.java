package com.wellme.notification.controller;

import java.util.Map;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.twilio.twiml.MessagingResponse;
import com.twilio.twiml.messaging.Body;
import com.twilio.twiml.messaging.Message;
import com.wellme.notification.service.SMSService;

@RestController
public class SMSController {
	@Autowired
	SMSService smsService;
	@RequestMapping(value="/sms", method = RequestMethod.POST, produces="application/xml")
	public String receiveAndRespond(HttpServletRequest request, HttpServletResponse response){
		System.out.println("Request is " + request);
		Map<String, String[]> paramsMap = request.getParameterMap();
		for(Entry<String, String[]> entry : paramsMap.entrySet()) {
			System.out.println("Key and value is: " + entry.getKey());
			
			for(String value : entry.getValue()) {
				System.out.println("Value is : " + value);
			}
		}
		String from = paramsMap.get("From")[0];
		String to = paramsMap.get("To")[0];
		Body body = new Body
                .Builder(paramsMap.get("Body")[0])
                .build();
		
        Message sms = new Message
                .Builder()
                .body(body)
                .from(from)
                .to(to)
                .build();
 
		return smsService.receiveAndRespond(sms);
	}
	
	@RequestMapping(value="/sms2", method = RequestMethod.POST)
	public String receiveAndRespond2(){
		return smsService.receiveAndRespond(null);
	}
}
