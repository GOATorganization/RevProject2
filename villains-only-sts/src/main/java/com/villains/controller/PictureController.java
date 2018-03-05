package com.villains.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;
import com.villains.pojo.Message;
import com.villains.service.PictureService;

@Controller("pictureController")
@CrossOrigin(origins = "http://localhost:4200")
public class PictureController {

	@Autowired
	private PictureService pictureService;

	@GetMapping("getAllPictures.app")
	public @ResponseBody ResponseEntity<List<Picture>> getAllPictures(HttpSession session) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(pictureService.getAllPicture(), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("getAllPicturesByPost.app")
	public @ResponseBody ResponseEntity<List<Picture>> getAllPicturesByPost(HttpSession session,
			@RequestBody Post post) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(pictureService.getPostPicture(post), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("getAllPicturesByUser.app")
	public @ResponseBody ResponseEntity<List<Picture>> getAllPicturesByUser(HttpSession session,
			@RequestBody User user) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(pictureService.getUserPicture(user), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("addPicture.app")
	public @ResponseBody ResponseEntity<Message> addPicture(HttpSession session, @RequestBody Picture picture) {
		if (session.getAttribute("id") != null) {
			System.out.println(picture.getPostId().getPostId());
			pictureService.addPicture(picture);
			return new ResponseEntity<>(new Message("Picture Successfully Uploaded!"), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("editPicture.app")
	public @ResponseBody ResponseEntity<Message> editPicture(HttpSession session, @RequestBody Picture picture) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(new Message("Picture Successfully Changed!"), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("deletePicture.app")
	public @ResponseBody ResponseEntity<Message> deletePicture(HttpSession session, @RequestBody Picture picture) {
		if (session.getAttribute("id") != null) {
			pictureService.removePicture(picture);
			return new ResponseEntity<>(new Message("Picture Successfully Deleted!"), HttpStatus.OK);
		} else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}

}
