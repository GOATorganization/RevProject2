package com.villains.service.tests;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.villains.model.PasswordResetToken;
import com.villains.model.User;
import com.villains.pojo.PasswordResetVm;
import com.villains.repository.PasswordResetTokenRepository;
import com.villains.repository.UserRepository;
import com.villains.service.UserService;
import com.villains.service.UserServiceImpl;
import com.villains.util.Mailer;
import com.villains.util.TokenGenerator;
import com.villains.util.UserValidator;

public class UserServiceTests {

	private UserRepository mockRepo = mock(UserRepository.class);
	private UserValidator mockVali = mock(UserValidator.class);
	private Mailer mockMailer = mock(Mailer.class);
	private TokenGenerator mockTokenGenerator = mock(TokenGenerator.class);
	private PasswordResetTokenRepository mockTokenRepo = mock(PasswordResetTokenRepository.class);
	
	private UserService userService = new UserServiceImpl(mockRepo, mockVali, mockMailer, mockTokenGenerator, mockTokenRepo);

	@Test
	public void registerUser_NewValidUserReturnsTrue() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		when(mockRepo.findByEmail(user.getEmail())).thenReturn(null);
		when(mockVali.validateUser(user)).thenReturn(true);

		// Execution
		boolean result = userService.registerUser(user);

		// Verification
		Assert.assertTrue(result);
	}

	@Test
	public void registerUser_NewInvalidUserReturnsFalse() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		when(mockRepo.findByEmail(user.getEmail())).thenReturn(null);
		when(mockVali.validateUser(user)).thenReturn(false);

		// Execution
		boolean result = userService.registerUser(user);

		// Verification
		Assert.assertFalse(result);
	}

	@Test
	public void registerUser_ExistingUserReturnsFalse() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		when(mockRepo.findByEmail(user.getEmail())).thenReturn(user);
		when(mockVali.validateUser(user)).thenReturn(true);

		// Execution
		boolean result = userService.registerUser(user);

		// Verification
		Assert.assertFalse(result);
	}

	@Test
	public void authenticateUser_WithWrongPasswordReturnsNotNull() {
		// Setup
		User user = new User();
		user.setPassword("password");
		User persistentUser = new User();
		persistentUser.setPassword("password");

		when(mockRepo.findByEmail(user.getEmail())).thenReturn(persistentUser);

		// Execution
		User result = userService.authenticateUser(user);

		// Verification
		Assert.assertNotNull(result);
	}

	@Test
	public void authenticateUser_EmailDoesNotExistReturnsNull() {
		// Setup
		// when(mockRepo.findByEmail(user.getEmail())).thenReturn(persistentUser);
		User user = new User();
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(null);

		// Execution
		User result = userService.authenticateUser(user);

		// Verification
		Assert.assertNull(result);
	}

	@Test
	public void processResetRequest_ValidEmailReturnsTrue() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(new User());
		when(mockTokenGenerator.generateToken(Mockito.any(Integer.class))).thenReturn("123");
		// Execution
		boolean result = userService.processResetRequest(user);

		// Verification
		Assert.assertTrue(result);
	}
	
	@Test
	public void processResetRequest_InvalidEmailReturnsFalse() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(null);
		when(mockTokenGenerator.generateToken(Mockito.any(Integer.class))).thenReturn("123");
		// Execution
		boolean result = userService.processResetRequest(user);

		// Verification
		Assert.assertFalse(result);
	}
	
	@Test
	public void processResetRequest_WithExistingTokenCallsDeleteToken() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		user.setPwResetToken(new PasswordResetToken("123", user));
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(user);
		when(mockTokenGenerator.generateToken(Mockito.any(Integer.class))).thenReturn("123");
		
		// Execution
		boolean result = userService.processResetRequest(user);

		// Verification
		Mockito.verify(mockTokenRepo, times(1)).deleteToken(Mockito.any(PasswordResetToken.class));
	}
	
	@Test
	public void attemptPasswordReset_WithValidTokenReturnsNotNull() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		user.setPwResetToken(new PasswordResetToken("123", null));
		
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(user);
		
		// Execution
		User result = userService.attemptPasswordReset(user.getEmail(), user.getPwResetToken().getToken());

		// Verification
		Assert.assertNotNull(result);
	}
	
	@Test
	public void attemptPasswordReset_WithInvalidTokenReturnsNull() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		user.setPwResetToken(new PasswordResetToken("123", null));
		
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(user);
		
		// Execution
		User result = userService.attemptPasswordReset(user.getEmail(), "not123");

		// Verification
		Assert.assertNull(result);
	}
	
	@Test
	public void attemptPasswordReset_WithInvalidEmailReturnsNull() {
		// Setup
		User user = new User();
		user.setEmail("email@email.com");
		user.setPwResetToken(new PasswordResetToken("123", null));
		
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(null);
		
		// Execution
		User result = userService.attemptPasswordReset(user.getEmail(), "123");

		// Verification
		Assert.assertNull(result);
	}
	
	@Test
	public void setPassword_WithMatchingPasswordConfirmationReturnsTrue() {
		// Setup		
		PasswordResetVm vm = new PasswordResetVm();
		vm.setToken("123");
		vm.setPassword("password");
		vm.setPasswordConfirm("password");
		vm.setEmail("email@email.com");
		
		User user = new User();
		user.setEmail(vm.getEmail());
		user.setPwResetToken(new PasswordResetToken(vm.getToken(), null));
		
		when(mockRepo.findByEmail(Mockito.any(String.class))).thenReturn(user);
		
		// Execution
		boolean result = userService.setPassword(vm);

		// Verification
		Assert.assertTrue(result);
	}
	
	

}
