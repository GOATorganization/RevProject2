package com.villains.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import com.villains.model.User;
import com.villains.pojo.Message;
import com.villains.service.UserService;
//Mark as a class
@Controller("userController")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/registerUser.app")
	public @ResponseBody ResponseEntity<Message> registerHero(HttpSession session, @RequestBody User user){
		if (userService.registerUser(user)) {	
			// If registration is successful, log the user in.
			return loginHero(session, user);
		}
		else
			return new ResponseEntity<>(new Message("FAILED TO REGISTER HERO"), HttpStatus.OK);
	}
	
	@PostMapping("/loginUser.app")
	public @ResponseBody ResponseEntity<Message> loginHero(HttpSession session, @RequestBody User user){
		// Authenticate user and retrieve persisted user - necessary for retrieving id to store in session.
		User persistedUser = userService.authenticateUser(user);
		
		if (persistedUser != null) {
			// If there is a persisted user, set up the session.
			session.setAttribute("email", persistedUser.getEmail());
			session.setAttribute("id", persistedUser.getUserId());
		
			// TODO: Redirect to correct page on success
			return new ResponseEntity<>(new Message("HERO SUCCESSFULLY LOGGED IN"), HttpStatus.OK);
		}
		else
			return new ResponseEntity<>(new Message("BAD CREDENTIALS"), HttpStatus.OK);
	}
	
	

}
