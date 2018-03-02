package com.villains.repository;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.villains.model.PasswordResetToken;

@Repository("passwordResetTokenRepositoryImpl")
@Transactional
public class PasswordResetTokenRepositoryImpl implements PasswordResetTokenRepository {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public void deleteToken(PasswordResetToken token) {
		sessionFactory.getCurrentSession().delete(token);
	}

}
