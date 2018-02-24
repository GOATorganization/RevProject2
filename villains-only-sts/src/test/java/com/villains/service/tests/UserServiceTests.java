package com.villains.service.tests;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;

import com.villains.model.User;
import com.villains.repository.UserRepository;
import com.villains.service.UserService;
import com.villains.service.UserServiceImpl;
import com.villains.util.UserValidator;

public class UserServiceTests {
	
	@Test
	public void registerNewValidUserReturnsTrue() {	
		// Setup
		UserRepository mockRepo = mock(UserRepository.class);
		UserValidator mockVali = mock(UserValidator.class);
		User mockUser = mock(User.class);
		UserService userService = new UserServiceImpl(mockRepo, mockVali);
		
		mockUser.setEmail("email@email.com");
		when(mockRepo.findByEmail(mockUser.getEmail())).thenReturn(null);
		when(mockVali.validateUser(mockUser)).thenReturn(true);
		
		// Execution
		boolean result = userService.registerUser(mockUser);
			
		// Verification
		Assert.assertTrue(result);
	}
	
	@Test
	public void registerExistingUserReturnsFalse() {	
		// Setup
		UserRepository mockRepo = mock(UserRepository.class);
		UserValidator mockVali = mock(UserValidator.class);
		User mockUser = mock(User.class);
		UserService userService = new UserServiceImpl(mockRepo, mockVali);
		
		mockUser.setEmail("email@email.com");
		when(mockRepo.findByEmail(mockUser.getEmail())).thenReturn(mockUser);
		when(mockVali.validateUser(mockUser)).thenReturn(true);
		
		// Execution
		boolean result = userService.registerUser(mockUser);
			
		// Verification
		Assert.assertFalse(result);
	}

}
