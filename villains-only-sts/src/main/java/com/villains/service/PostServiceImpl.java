package com.villains.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.Post;
import com.villains.model.User;
import com.villains.repository.PostRepository;

@Service("postServiceImpl")
public class PostServiceImpl implements PostService {
	

    private static final Logger logger = LogManager.getLogger(PostService.class);
	
	@Autowired
	private PostRepository postRepository;
	
	public PostServiceImpl(PostRepository postRepository) {
		this.postRepository = postRepository;
	}

	@Override
	public List<Post> getAllPost() {
		List<Post> returner = postRepository.getAllPost();
		for(int i = 0; i < returner.size(); i++) {
			User rawUser = returner.get(i).getUserId();
			rawUser.setPassword(null);
			rawUser.setLikes(null);
			rawUser.setPosts(null);
			returner.get(i).setUserId(rawUser);
		}
		logger.info(returner);
		return returner;
	}

	@Override
	public void createPost(Post post) {
		postRepository.addPost(post);
	}

	@Override
	public void editPost(Post post) {
		postRepository.editPost(post);
	}

	@Override
	public List<Post> getAllPostByUser(User user) {
		List<Post> returner = postRepository.getAllPostByUser(user);
		for(int i = 0; i < returner.size(); i++) {
			User rawUser = returner.get(i).getUserId();
			rawUser.setPassword(null);
			rawUser.setLikes(null);
			rawUser.setPosts(null);
			returner.get(i).setUserId(rawUser);
		}
		return returner;
	}

}
