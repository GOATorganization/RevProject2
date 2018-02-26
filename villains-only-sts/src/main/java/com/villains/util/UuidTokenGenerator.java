package com.villains.util;

import java.util.UUID;

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
