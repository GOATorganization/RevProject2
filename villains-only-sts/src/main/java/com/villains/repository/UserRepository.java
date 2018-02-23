package com.villains.repository;

import java.util.List;

import com.villains.model.User;


public interface UserRepository {
	
	/**
	 * Selects all the user objects
	 * @return returns all the user objects
	 */
	List<User> selectAll();
	User findByName(String fname, String lname);
	void create(User user);
	User findByEmail(String email);
	void update(User user);

}
