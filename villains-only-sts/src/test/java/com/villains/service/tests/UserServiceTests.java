package com.villains.service.tests;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;

import com.villains.model.User;
import com.villains.repository.UserRepository;
import com.villains.service.UserService;
import com.villains.service.UserServiceImpl;

public class UserServiceTests {
	
	@Test
	public void registerNewUsernameReturnsTrue() {	
		// Setup
		UserRepository mockRepo = mock(UserRepository.class);
		User mockUser = mock(User.class);
		UserService userService = new UserServiceImpl(mockRepo);
		
		mockUser.setEmail("email@email.com");
		when(mockRepo.findByEmail(mockUser.getEmail())).thenReturn(null);
		
		// Execution
		boolean result = userService.registerUser(mockUser);
			
		// Verification
		Assert.assertTrue(result);
	}
	
	@Test
	public void registerExistingUsernameReturnsFalse() {	
		// Setup
		UserRepository mockRepo = mock(UserRepository.class);
		User mockUser = mock(User.class);
		UserService userService = new UserServiceImpl(mockRepo);
		
		mockUser.setEmail("email@email.com");
		when(mockRepo.findByEmail(mockUser.getEmail())).thenReturn(mockUser);
		
		// Execution
		boolean result = userService.registerUser(mockUser);
			
		// Verification
		Assert.assertFalse(result);
	}

}
