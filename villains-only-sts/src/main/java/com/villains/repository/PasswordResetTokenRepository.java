package com.villains.repository;

import com.villains.model.PasswordResetToken;

public interface PasswordResetTokenRepository {
	void deleteToken(PasswordResetToken token);
}
