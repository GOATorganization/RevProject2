package com.villains.service;

import java.util.List;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;

public interface PictureService {
	
	/**
	 * Gets a list of all the pictures
	 * @return the list of all the pictures
	 */
	List<Picture> getAllPicture();
	
	/**
	 * Returns a list of all pictures associted with a specific post
	 * @param post THe post to grab the pictures from
	 * @return the list of all the pictures associated with the post in the param
	 */
	List<Picture> getPostPicture( Post post);
	
	/**
	 * Gets a list of all pictures by the user
	 * @param user the user to grab all the picture from
	 * @return the list of all pictures from that specific user
	 */
	List<Picture> getUserPicture(User user);
	
	/**
	 * Add  picture to the database
	 * @param picture the picture to add
	 */
	void addPicture(Picture picture);
	
	/**
	 * Edits all the pictures from the database
	 * @param picture the pictures to edit
	 */
	void editPicture(Picture picture);
	
	
	/**
	 * Remove the picture from the database
	 * @param picture the piture in question to remove
	 */
	void removePicture(Picture picture);
	
	/**
	 * Gets picture by url
	 * @param url the url to search for
	 * @return the picture
	 */
	Picture getPictureByUrl(String url);
}
