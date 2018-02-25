package com.villains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.User;
import com.villains.repository.UserRepository;

@Service("villainUserService")
public class VillainUserServiceImpl implements VillainUserService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getAllUser() {
		// TODO Auto-generated method stub
		return userRepository.selectAll();
	}

	@Override
	public void registerUser(User user) {
		userRepository.create(user);

	}

	@Override
	public User findHeroEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findByEmail(email);
	}

	@Override
	public void editUser(User user) {
		userRepository.update(user);

	}

}
