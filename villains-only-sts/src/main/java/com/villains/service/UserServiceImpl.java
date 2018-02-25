package com.villains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.User;
import com.villains.repository.UserRepository;
import com.villains.util.UserValidator;
import com.villains.util.UserValidatorImpl;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserValidator userValidator;

	public UserServiceImpl() {
		super();
		userValidator = new UserValidatorImpl();
	}

	public UserServiceImpl(UserRepository userRepository) {
		this();
		this.userRepository = userRepository;
	}
	
	public UserServiceImpl(UserRepository userRepository, UserValidator userValidator) {
		this.userRepository = userRepository;
		this.userValidator = userValidator;
	}
	
	@Override
	public List<User> getAllUser() {
		return userRepository.selectAll();
	}

	@Override
	public Boolean registerUser(User user) {
		// 1. Check if email already exists in DB
		User conflictingUser = userRepository.findByEmail(user.getEmail());
		
		if (conflictingUser == null && userValidator.validateUser(user)) { 
		// 2. If email doesn't exist & input is valid, register user
			userRepository.create(user);
			return true;
		}
		else {
		// 3. If email exists or input invalid, return false.
			return false;
		}
	}

	@Override
	public User findHeroEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void editUser(User user) {
		userRepository.update(user);

	}

	@Override
	public User authenticateUser(User user) {
		User userToCheck = userRepository.findByEmail(user.getEmail());
		
		if (userToCheck != null) {
			if (user.getPassword().equals(userToCheck.getPassword())) {
				return userToCheck;
			}
		}
		
		return null;
	}

}