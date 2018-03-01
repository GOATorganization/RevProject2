package com.villains.util;

public interface Mailer {
	public void send(String username, String password, String recipient, String subject, String body);
}
