package com.villains.service;

import java.util.List;

import com.villains.model.Post;
import com.villains.model.User;
import com.villains.pojo.PasswordResetVm;

/**
 * Performs business logic for a user.
 */
public interface UserService {
	
	/**
	 * Gets all the users 
	 * @return A list of all the users
	 */
	List<User> getAllUser();
	
	/**
	 * Registers a user
	 * @param user the user to add
	 * @return true on success false on fail
	 */
	Boolean registerUser(User user);
	
	/**
	 * Authenticates the user
	 * @param user the user to authenticate
	 * @return the authenticated user to add to session
	 */
	User authenticateUser(User user);
	
	/**
	 * Find the users by email
	 * @param user User to find null with only email populated
	 * @return  the user found theough the email
	 */
	User findUserByEmail(User user);
	
	/**
	 * Edit the user
	 * @param user the changed user object
	 */
	void editUser(User user);
	
	/**
	 * Edit the user without the password
	 * @param user The user without the password
	 */
	void editUserIgnorePass(User user);
	
	/**
	 * Finds a user by their email. This is in the interface.
	 * @param email The users email
	 * @return the user
	 */
	User findUserByEmail(String email);
	boolean processResetRequest(User user);
	User attemptPasswordReset(String email, String token);
	boolean setPassword(PasswordResetVm vm);
	
	/**
	 * Gets the likes of a user
	 * @param user User to retreive the likes for.
	 * @return
	 */
	List<Post> getUserLikes(User user);
}
