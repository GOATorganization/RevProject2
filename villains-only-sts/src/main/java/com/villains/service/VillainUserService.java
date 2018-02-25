package com.villains.service;

import java.util.List;

import com.villains.model.User;


public interface VillainUserService {
	List<User> getAllUser();
<<<<<<< HEAD:villains-only-sts/src/main/java/com/villains/service/VillainUserService.java
	void registerUser(User user);
	User findHeroEmail(String email);
=======
	Boolean registerUser(User user);
	User authenticateUser(User user);
	User findUserByEmail(User user);
>>>>>>> cf8641b96f416bf3db7eebd86c68c8c03d6932c3:villains-only-sts/src/main/java/com/villains/service/UserService.java
	void editUser(User user);

}
