package com.villains.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.villains.model.User;
import com.villains.pojo.Message;
import com.villains.pojo.PasswordResetVm;
import com.villains.service.UserService;

//Mark as a class
@Controller("userController")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/registerUser.app")
	public @ResponseBody ResponseEntity<Message> registerHero(HttpSession session, @RequestBody User user) {
		if (userService.registerUser(user)) {
			// If registration is successful, log the user in.
			return loginHero(session, user);
		} else
			return new ResponseEntity<>(new Message("FAILED TO REGISTER HERO"), HttpStatus.OK);
	}

	@GetMapping("/getAllUser.app")
	public @ResponseBody ResponseEntity<List<User>> getAllUser() {
		return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
	}

	// Add in httpsession at a later date
	@PostMapping("/getUserByEmail.app")
	public @ResponseBody ResponseEntity<User> findUserByEmail(@RequestBody User user) {
		return new ResponseEntity<User>(userService.findUserByEmail(user), HttpStatus.OK);
	}

	@PostMapping("/loginUser.app")
	public @ResponseBody ResponseEntity<Message> loginHero(HttpSession session, @RequestBody User user) {
		// Authenticate user and retrieve persisted user - necessary for retrieving id
		// to store in session.
		User persistedUser = userService.authenticateUser(user);

		if (persistedUser != null) {
			// If there is a persisted user, set up the session.
			session.setAttribute("email", persistedUser.getEmail());
			session.setAttribute("id", persistedUser.getUserId());

			// TODO: Redirect to correct page on success
			return new ResponseEntity<>(new Message("HERO SUCCESSFULLY LOGGED IN"), HttpStatus.OK);
		} else
			return new ResponseEntity<>(new Message("BAD CREDENTIALS"), HttpStatus.OK);
	}
	
	@GetMapping("/test.app")
	public @ResponseBody ResponseEntity<Message> test(HttpSession session) {
		String email = (String)session.getAttribute("email");
		Integer id = (Integer)session.getAttribute("id");
		
		System.out.println(email + " " + id);
				
		return new ResponseEntity<>(new Message("TEST COMPLETE"), HttpStatus.OK);
	}

	/**
	 * Checks the currently logged in user based on the session.
	 * 
	 * @param session
	 * @return
	 */
	@GetMapping("/loggedInUser.app")
	public @ResponseBody ResponseEntity<User> getLoggedInUser(HttpSession session) {
		String email = (String) session.getAttribute("email");
		System.out.println("From UserController: getLoggedInUser(HttpSession session): email from session: " + session);
		User user = userService.findUserByEmail(email);
		System.out.println(user);
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	@GetMapping("/resetPassword.app")
	public @ResponseBody ResponseEntity<Message> resetPassword(HttpSession session,
			@RequestParam(value = "email", required = true) String email,
			@RequestParam(value = "token", required = true) String token) {

		User user = userService.attemptPasswordReset(email, token);

		if (user != null) {
			session.setAttribute("email", user.getEmail());
			session.setAttribute("id", user.getUserId());
			return new ResponseEntity<>(HttpStatus.OK);
		} else
			return new ResponseEntity<>(new Message("resetPassword failed"), HttpStatus.FORBIDDEN);

	}

	/**
	 * Updates the user's information.
	 * 
	 * @param user
	 *            User whose data is being updated
	 * @return A successful message if the change is persisted, otherwise an error
	 *         message
	 */
	@PostMapping("/updateUserProfile.app")
	public @ResponseBody ResponseEntity<Message> updateUserProfile(@RequestBody User user) {
		System.out.println("getting to update profile");
		userService.editUser(user);
		return new ResponseEntity<>(new Message("Updated changes"), HttpStatus.OK);
	}

	/**
	 * Requests a password reset email
	 * 
	 * @param user
	 *            User whose data is being updated
	 * @return A successful message if processResetRequest succeeds
	 * 
	 */
	@PostMapping("/requestPasswordReset.app")
	public @ResponseBody ResponseEntity<Message> requestPasswordReset(HttpSession session, @RequestBody User user) {

		if (userService.processResetRequest(user))
			return new ResponseEntity<>(HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

	/**
	 * Sets a new password
	 * 
	 * @param vm
	 *            User data & password + password confirmation input
	 * @return A successful message if setPassword() succeeds
	 * 
	 */
	@PostMapping("/setNewPassword.app")
	public @ResponseBody ResponseEntity<Message> setNewPassword(HttpSession session, @RequestBody PasswordResetVm vm) {
		boolean success = false;

		if (vm.getPassword().equals(vm.getPasswordConfirm())) {
			success = userService.setPassword(vm);
			return new ResponseEntity<>(new Message(String.valueOf(success)), HttpStatus.OK);
		}
		else
			return new ResponseEntity<>(HttpStatus.FORBIDDEN);
	}

}
