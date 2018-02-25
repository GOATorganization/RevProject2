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

import com.villains.model.Post;
import com.villains.model.User;
import com.villains.pojo.Message;
import com.villains.service.PostService;

@Controller("postController")
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {
	
	@Autowired
	private PostService postService;
	
	@GetMapping("/getAllPost.app")
	public @ResponseBody ResponseEntity<List<Post>> getAllPost(){
		return new ResponseEntity<>(postService.getAllPost() , HttpStatus.OK);
	}
	
	@PostMapping("/getAllPostByUser.app")
	public @ResponseBody ResponseEntity<List<Post>> getAllPostByUser(@RequestBody User user){
		return new ResponseEntity<>(postService.getAllPostByUser(user), HttpStatus.OK);
	}
	
	@PostMapping("/createPost.app")
	public @ResponseBody ResponseEntity<Message> createPost(@RequestBody Post post){
		postService.createPost(post);
		return new ResponseEntity<>(new Message("Post Created Sucessfully!"), HttpStatus.OK);
	}
	
	
	@PostMapping("/editPost.app")
	public @ResponseBody ResponseEntity<Message> editPost(@RequestBody Post post){
		postService.editPost(post);
		return new ResponseEntity<>(new Message("Post Edited Sucessfully!"), HttpStatus.OK);
	}

}
