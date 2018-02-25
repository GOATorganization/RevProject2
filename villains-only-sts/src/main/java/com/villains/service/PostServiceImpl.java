package com.villains.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villains.model.Post;
import com.villains.model.User;
import com.villains.repository.PostRepository;

@Service("postServiceImpl")
public class PostServiceImpl implements PostService {
	
	@Autowired
	private PostRepository postRepository;
	
	public PostServiceImpl(PostRepository postRepository) {
		this.postRepository = postRepository;
	}

	@Override
	public List<Post> getAllPost() {
		return postRepository.getAllPost();
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
		return postRepository.getAllPostByUser(user);
	}

}
