package com.villains.repository;

import java.util.List;

import com.villains.model.User;


public interface UserRepository {
	
	/**
	 * Selects all the user objects
	 * @return returns all the user objects
	 */
	List<User> selectAll();
	
	/**
	 * 
	 * @param fname The first name of the user to search
	 * @param lname The last name of the user to Search
	 * @return Returns the user that matches the criteria. 
	 */
	User findByName(String fname, String lname);
	
	/**
	 * Creates a new user
	 * @param user The user to create
	 */
	void create(User user);
	
	/**
	 * 
	 * @param email Email used to find a user
	 * @return
	 */
	User findByEmail(String email);
	void update(User user);

}
