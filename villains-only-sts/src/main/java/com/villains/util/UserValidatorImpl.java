package com.villains.util;

import org.springframework.stereotype.Component;

import com.villains.model.User;

@Component("userValidator")
public class UserValidatorImpl implements UserValidator {
		public boolean validateUser(User user) {
			if (user.getFirstName().length() == 0 || user.getLastName().length() == 0 ||
				user.getEmail().length() == 0 || user.getPassword().length() == 0 ||
				user.getFirstName().length() > 64 || user.getLastName().length() > 64 ||
				user.getEmail().length() > 64 || user.getPassword().length() > 64)		
				return false;
			else 
				return true;
		}
}
