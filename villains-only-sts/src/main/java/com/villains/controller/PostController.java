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

import com.villains.model.Post;
import com.villains.model.User;
import com.villains.pojo.Message;
import com.villains.service.PostService;

@Controller("postController")
@CrossOrigin(origins = "http://localhost:4200")
public class PostController {

	@Autowired
	private PostService postService;

	/**
	 * Gets all the posts
	 * 
	 * @return a list of all the posts
	 */
	@GetMapping("/getAllPost.app")
	public @ResponseBody ResponseEntity<List<Post>> getAllPost(HttpSession session) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(postService.getAllPost(), HttpStatus.OK);
		} else
			return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("/getAllPostByUser.app")
	public @ResponseBody ResponseEntity<List<Post>> getAllPostByUser(@RequestBody User user, HttpSession session) {
		if (session.getAttribute("id") != null) {
			return new ResponseEntity<>(postService.getAllPostByUser(user), HttpStatus.OK);
		} else
			return new ResponseEntity<List<Post>>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("/createPost.app")
	public @ResponseBody ResponseEntity<Post> createPost(@RequestBody Post post, HttpSession session) {
		if (session.getAttribute("id") != null) {
			postService.createPost(post);
			return new ResponseEntity<Post>(post, HttpStatus.OK);
		} else
			return new ResponseEntity<Post>(HttpStatus.UNAUTHORIZED);
	}

	@PostMapping("/editPost.app")
	public @ResponseBody ResponseEntity<Message> editPost(@RequestBody Post post, HttpSession session) {
		if (session.getAttribute("id") != null) {
			postService.editPost(post);
			return new ResponseEntity<>(new Message("Post Edited Sucessfully!"), HttpStatus.OK);
		} else
			return new ResponseEntity<Message>(HttpStatus.UNAUTHORIZED);
	}

}
