package com.villains.controller;

import java.util.List;

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
	public @ResponseBody ResponseEntity<List<Picture>> getAllPictures(){
		return new ResponseEntity<>(pictureService.getAllPicture(), HttpStatus.OK);
	}
	
	@PostMapping("getAllPicturesByPost.app")
	public @ResponseBody ResponseEntity<List<Picture>> getAllPicturesByPost(@RequestBody Post post){
		return new ResponseEntity<>(pictureService.getPostPicture(post), HttpStatus.OK);
	}
	
	@PostMapping("getAllPicturesByUser.app")
	public @ResponseBody ResponseEntity<List<Picture>> getAllPicturesByUser(@RequestBody User user){
		return new ResponseEntity<>(pictureService.getUserPicture(user), HttpStatus.OK);
	}
	
	@PostMapping("addPicture.app")
	public @ResponseBody ResponseEntity<Message> addPicture(@RequestBody Picture picture){
		System.out.println(picture.getPostId().getPostId());
		pictureService.addPicture(picture);
		return new ResponseEntity<>(new Message("Picture Successfully Uploaded!"), HttpStatus.OK);
	}
	
	@PostMapping("editPicture.app")
	public @ResponseBody ResponseEntity<Message> editPicture(@RequestBody Picture picture){
		return new ResponseEntity<>(new Message("Picture Successfully Changed!"), HttpStatus.OK);
	}
	
	@PostMapping("deletePicture.app")
	public @ResponseBody ResponseEntity<Message> deletePicture(@RequestBody Picture picture){
		pictureService.removePicture(picture);
		return new ResponseEntity<>(new Message("Picture Successfully Deleted!"), HttpStatus.OK);
	}
	
}
