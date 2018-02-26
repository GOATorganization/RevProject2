package com.villains.util;

import java.util.UUID;

import org.springframework.stereotype.Component;

@Component("tokenGenerator")
public class UuidTokenGenerator implements TokenGenerator {

	@Override
	public String generateToken(int repeatCount) {
		String token = "";

		for (int i=0; i<repeatCount; i++) {
			token += UUID.randomUUID();
		}
		
		return token;
	}

}
