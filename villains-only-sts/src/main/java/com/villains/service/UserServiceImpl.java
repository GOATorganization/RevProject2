package com.villains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.User;
import com.villains.repository.UserRepository;

@Service("villainUserService")
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;

	public UserServiceImpl() {
		super();
	}

	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
	
	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userRepository.selectAll();
	}

	@Override
	public Boolean registerUser(User user) {
		// 1. Check if email already exists in DB
		User conflictingUser = userRepository.findByEmail(user.getEmail());
		
		if (conflictingUser == null && validateUser(user)) { 
		// 2. If email doesn't exist & input is valid, register user
			userRepository.create(user);
			return true;
		}
		else {
		// 3. If email exists or input invalid, return false.
			return false;
		}
	}

	private boolean validateUser(User user) {
		// Lower bounds
		if (user.getFirstName().length() == 0 || user.getLastName().length() == 0 ||
			user.getEmail().length() == 0 || user.getPassword().length() == 0 ||
			user.getFirstName().length() > 64 || user.getLastName().length() > 64 ||
			user.getEmail().length() > 64 || user.getPassword().length() > 64)
			return false;
		else 
			return true;
	}

	@Override
	public User findHeroEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void editUser(User user) {
		userRepository.update(user);

	}

}
