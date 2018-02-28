package com.villains.util;

public interface Mailer {
	void send(String from, String password, String to, String sub, String msg);
}
