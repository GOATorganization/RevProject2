package com.villains.service;

import java.util.List;

import com.villains.model.User;


public interface VillainUserService {
	List<User> getAllUser();
	void registerUser(User user);
	User findHeroEmail(String email);
	void editUser(User user);

}
