package com.villains.repository;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;

import java.util.List;



public interface PictureRepository {
	
	/**
	 * Returns a list of all pictures
	 * @return the list of all pictures
	 */
	List<Picture> getAllPicture();
	
	/**
	 * Gets a list of all pictures in a post
	 * @param post the post that contains pictures
	 * @return returns a list of all the pictures in a post. 
	 */
	List<Picture> getAllPictureByPost(Post post);
	
	
	/**
	 * Edit picture this is accomplished by editing the picture url. Essentially changing the picture
	 * @param picture the picture to edit
	 */
	void editPicture(Picture picture);
	
	/**
	 * Adds a picture to the database
	 * @param picture - The picture object we are adding to the database
	 */
	void addPicture(Picture picture);
	
	/**
	 * Delete picture from database
	 * @param picture The picture that needs to be deleted.
	 */
	void deletePicture(Picture picture);

}
