package com.villains.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.villains.model.Post;
import com.villains.model.User;

@Repository("postRepositoryImpl")
@Transactional
public class PostRepositoryImpl implements PostRepository {
	
	@Autowired
	private SessionFactory sessionFactory;

	/*
	 * (non-Javadoc)
	 * @see com.villains.repository.PostRepository#getAllPost()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getAllPost() {
		return sessionFactory.getCurrentSession().createCriteria(Post.class).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Post> getAllPostByUser(User user) {
		try {
		return (List<Post>) sessionFactory.getCurrentSession().createCriteria(Post.class)
				.add(Restrictions.like("userId", user))
						.list();
		} catch(IndexOutOfBoundsException e) {
			return null;
		}
	}

	@Override
	public void addPost(Post post) {
		sessionFactory.getCurrentSession().save(post);
		
	}

	@Override
	public void editPost(Post post) {
		sessionFactory.getCurrentSession().update(post);
		
	}

}
