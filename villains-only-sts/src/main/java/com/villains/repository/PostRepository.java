package com.villains.repository;

import java.util.List;

import com.villains.model.Post;
import com.villains.model.User;

public interface PostRepository {
	
	/**
	 * Returns all posts
	 * @return All the posts.
	 */
	List<Post> getAllPost();
	
	/**
	 * Gets all the post by a specific user
	 * @param user the user to get posts from
	 * @return all posts from a user
	 */
	List<Post> getAllPostByUser(User user);
	
	/**
	 * Adds a post
	 * @param post The post to create
	 * @param user The user the post belongs to
	 */
	void addPost(Post post);
	
	/**
	 * Edits a post
	 * @param post The post to edit
	 */
	void editPost(Post post);

}
