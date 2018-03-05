package com.villains.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;
import com.villains.repository.PictureRepository;
import com.villains.repository.PostRepository;
import com.villains.util.Log4Aspect;

@Service("pictureServiceImpl")
public class PictureServiceImpl implements PictureService {
	

    private static final Logger logger = LogManager.getLogger(PictureService.class);
	
	@Autowired
	private PictureRepository pictureRepository;
	
	@Autowired
	private PostRepository postRepository;

	@Override
	public List<Picture> getAllPicture() {
		logger.info(pictureRepository.getAllPicture());
		return pictureRepository.getAllPicture();
	}

	@Override
	public List<Picture> getPostPicture(Post post) {
		logger.info(pictureRepository.getAllPictureByPost(post));
		return pictureRepository.getAllPictureByPost(post);
	}

	@Override
	public List<Picture> getUserPicture(User user) {
		List<Post> tempPost = postRepository.getAllPostByUser(user);
		List<Picture> returner = new ArrayList<Picture>();
		for(int i =0; i<tempPost.size(); i++) {
			returner.addAll(pictureRepository.getAllPictureByPost(tempPost.get(i)));
		}
		
		return returner;
	}

	@Override
	public void addPicture(Picture picture) {
		pictureRepository.addPicture(picture);
	}

	@Override
	public void editPicture(Picture picture) {
		pictureRepository.editPicture(picture);

	}

	@Override
	public void removePicture(Picture picture) {
		pictureRepository.deletePicture(picture);

	}

	/* (non-Javadoc)
	 * @see com.villains.service.PictureService#getPictureByUrl(java.lang.String)
	 */
	@Override
	public Picture getPictureByUrl(String url) {
		return pictureRepository.getPictureByUrl(url);
	}
	
	
}
