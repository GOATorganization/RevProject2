package com.villains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.PasswordResetToken;
import com.villains.model.Post;
import com.villains.model.User;
import com.villains.pojo.PasswordResetVm;
import com.villains.repository.PasswordResetTokenRepository;
import com.villains.repository.UserRepository;
import com.villains.util.Mailer;
import com.villains.util.TokenGenerator;
import com.villains.util.UserValidator;
import com.villains.util.UserValidatorImpl;
import com.villains.util.UuidTokenGenerator;

@Service("userService")
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private UserValidator userValidator;
	@Autowired
	private Mailer mailer;
	@Autowired
	private TokenGenerator tokenGenerator;
	@Autowired
	private PasswordResetTokenRepository tokenRepo;

	public UserServiceImpl() {
		super();
		userValidator = new UserValidatorImpl();
	}

	public UserServiceImpl(UserRepository userRepository) {
		this();
		this.userRepository = userRepository;
	}

	public UserServiceImpl(UserRepository userRepository, UserValidator userValidator) {
		this.userRepository = userRepository;
		this.userValidator = userValidator;
	}
	
	public UserServiceImpl(UserRepository userRepository, UserValidator userValidator, Mailer mailer,
			TokenGenerator tokenGenerator, PasswordResetTokenRepository tokenRepo) {
		super();
		this.userRepository = userRepository;
		this.userValidator = userValidator;
		this.mailer = mailer;
		this.tokenGenerator = tokenGenerator;
		this.tokenRepo = tokenRepo;
	}

	@Override
	public List<User> getAllUser() {
		return userRepository.selectAll();
	}

	@Override
	public Boolean registerUser(User user) {
		// 1. Check if email already exists in DB
		User conflictingUser = userRepository.findByEmail(user.getEmail());

		if (conflictingUser == null && userValidator.validateUser(user)) {
			// 2. If email doesn't exist & input is valid, register user
			userRepository.create(user);
			return true;
		} else {
			// 3. If email exists or input invalid, return false.
			return false;
		}
	}

	@Override
	public User findUserByEmail(User user) {
		return userRepository.findByEmail(user.getEmail());
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public void editUser(User user) {
		userRepository.update(user);
	}
	
	@Override
	public void editUserIgnorePass(User user) {
		userRepository.updateIgnorePass(user);
	}

	@Override
	public User authenticateUser(User user) {
		User userToCheck = userRepository.findByEmail(user.getEmail());

		if (userToCheck != null) {
			if (user.getPassword().equals(userToCheck.getPassword())) {
				userToCheck.setPassword(null);
				return userToCheck;
			}
		}

		return null;
	}

	@Override
	public boolean processResetRequest(User user) {
		User userToCheck = userRepository.findByEmail(user.getEmail());

		if (userToCheck != null) {
			String newTokenStr = tokenGenerator.generateToken(3);
			PasswordResetToken newToken = new PasswordResetToken(newTokenStr, userToCheck);

			PasswordResetToken currentToken = userToCheck.getPwResetToken();

			if (currentToken != null) {
				userToCheck.setPwResetToken(null);
				userRepository.update(userToCheck);
				tokenRepo.deleteToken(currentToken);
			}

			userToCheck.setPwResetToken(newToken);
			userRepository.update(userToCheck);

			String emailSubject = "Password Reset Request";

//			String emailBody = "Click " + "<a href=\"http://localhost:4200/updatepassword?email="
//					+ userToCheck.getEmail() + "&token=" + newTokenStr + "\">" + "here" + "</a>"
//					+ " to reset your password.";
			
			String emailBody = "Your token is: " + newTokenStr;

			mailer.send("villains.only.do.not.reply@gmail.com", "p4ssw0rd123", user.getEmail(), emailSubject,
					emailBody);

			return true;
		} else
			return false;

	}

	@Override
	public User attemptPasswordReset(String email, String token) {
		User userToCheck = userRepository.findByEmail(email);

		if (userToCheck != null && userToCheck.getPwResetToken().getToken().equals(token)) {
			PasswordResetToken currentToken = userToCheck.getPwResetToken();
			userToCheck.setPwResetToken(null);
			userRepository.update(userToCheck);
			tokenRepo.deleteToken(currentToken);
			return userToCheck;
		} else
			return null;
	}

	@Override
	public boolean setPassword(PasswordResetVm vm) {
		User userToCheck = userRepository.findByEmail(vm.getEmail());
		
		if (userToCheck != null && vm.getPassword().equals(vm.getPasswordConfirm()) 
				&& userToCheck.getPwResetToken().getToken().equals(vm.getToken())) {
			userToCheck.setPassword(vm.getPassword());		
			PasswordResetToken oldTok = userToCheck.getPwResetToken();
			userToCheck.setPwResetToken(null);
			userRepository.update(userToCheck);
			tokenRepo.deleteToken(oldTok);
			
			return true;
		}
		else
			return false;
	}

	public List<Post> getUserLikes(User user) {
		List<Post> returner = userRepository.findByEmail(user.getEmail()).getLikes();
		for(int i = 0; i < returner.size(); i++) {
			
			User rawUser = returner.get(i).getUserId();
			rawUser.setPassword(null);
			rawUser.setLikes(null);
			rawUser.setPosts(null);
			returner.get(i).setUserId(rawUser);
		}
		return returner;
	}

}
