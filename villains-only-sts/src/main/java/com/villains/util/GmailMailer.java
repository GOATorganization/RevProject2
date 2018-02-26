package com.villains.util;

import org.springframework.stereotype.Component;

@Component("mailer")
public class GmailMailer implements Mailer {

	@Override
	public void SendMail(String recipient, String body) {
		// TODO Auto-generated method stub
		System.out.println("I sent some mail.");
	}

}
