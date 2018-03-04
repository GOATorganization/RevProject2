package com.villains.util;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component("aspect")
public class Log4Aspect {

    private static final Logger logger = LogManager.getLogger(Log4Aspect.class);
	
    
	@AfterReturning(value = "@target(org.springframework.stereotype.Repository) && !execution(* get*(..))", returning = "returnValue")
	public void returnedFromRepository(JoinPoint jp, Object returnValue) {
		logger.info(returnValue);
	}

	@AfterReturning(value = "@target(org.springframework.stereotype.Service) && !execution(* get*(..))", returning = "returnValue")
	public void returnedFromService(JoinPoint jp, Object returnValue) {
		logger.info(returnValue);
	}
	
	@AfterReturning(value = "@target(org.springframework.stereotype.Controller) && !execution(* get*(..))", returning = "returnValue")
	public void returnedFromController(JoinPoint jp, Object returnValue) {
		logger.info(returnValue);
	}
	
	@Before(value = "@target(org.springframework.stereotype.Controller && !execution(* *Picture(..)")
	public void givenToPictureController(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
	
	@Before(value = "@target(org.springframework.stereotype.Controller && !execution(* *Post(..)")
	public void givenToPostController(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
	
	@Before(value = "@target(org.springframework.stereotype.Controller && !execution(* *User(..)")
	public void givenToUserController(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
	
	@Before(value = "@target(org.springframework.stereotype.Service && !execution(* *Picture(..)")
	public void givenToPictureService(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
	
	@Before(value = "@target(org.springframework.stereotype.Service && !execution(* *Post(..)")
	public void givenToPostService(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
	
	@Before(value = "@target(org.springframework.stereotype.Service && !execution(* *User(..)")
	public void givenToUserService(JoinPoint jp) {
		logger.info(jp.getArgs());
	}
}
