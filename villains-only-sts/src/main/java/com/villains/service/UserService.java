package com.villains.service;

import java.util.List;

import com.villains.model.User;

/**
 * Performs business logic for a user.
 */
public interface UserService {
	List<User> getAllUser();
	Boolean registerUser(User user);
	User authenticateUser(User user);
	User findUserByEmail(User user);
	void editUser(User user);
	
	/**
	 * Finds a user by their email. This is in the interface.
	 * @param email The users email
	 * @return the user
	 */
	User findUserByEmail(String email);
}
