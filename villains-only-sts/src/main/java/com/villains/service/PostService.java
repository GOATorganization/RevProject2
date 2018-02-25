package com.villains.service;

import java.util.List;

import com.villains.model.Post;
import com.villains.model.User;

public interface PostService {
	
	/**
	 * Returns all posts
	 * @return returns all posts
	 */
	List<Post> getAllPost();
	
	/**
	 * Creates a new post
	 * @param post The post to create
	 */
	void createPost(Post post);
	
	/**
	 * Edits a post
	 * @param post the post to edit
	 */
	void editPost(Post post);
	
	/**
	 * Gets all the posts by a specific user
	 * @param user the user to grab
	 * @return all the posts that the user has created
	 */
	List<Post> getAllPostByUser(User user);

}
