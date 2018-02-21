package com.villains.DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;
import com.villains.util.HibernateUtil;

public class DAOImpl implements DAO{

	@Override
	public void insertUser(User u) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		session.save(u);
		tx.commit();
		session.close();
		
	}

	@Override
	public void insertPost(Post p) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		session.save(p);
		tx.commit();
		session.close();
	}

	@Override
	public void insertPicture(Picture p) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		session.save(p);
		tx.commit();
		session.close();
	}

	@Override
	public List<User> getAllUser() {
		Session session = HibernateUtil.getSession();
		
		List<User> users = session.createCriteria(User.class).list();
		
		for(User user:users) {
			user.getUserId();
		}
		
		session.close();
		return users;
	}

	@Override
	public List<Post> getAllPost() {
		Session session = HibernateUtil.getSession();
		
		List<Post> posts = session.createCriteria(Post.class).list();
		
		for(Post post:posts) {
			post.getPostId();
		}
		
		session.close();
		return posts;
	}

	@Override
	public List<Picture> getAllPicture() {
		Session session = HibernateUtil.getSession();
	
		List<Picture> pictures = session.createCriteria(Picture.class).list();
		
		for(Picture picture:pictures) {
			picture.getPictureId();
		}
		
		session.close();
		return pictures;
	}

	@Override
	public User getUserById(int i) {
		Session session = HibernateUtil.getSession();
		User u = (User) session.get(User.class, i);
		
		u.getUserId();
		
		session.close();
		return u;
	}

	@Override
	public Post getPostById(int i) {
		Session session = HibernateUtil.getSession();
		Post u = (Post) session.get(Post.class, i);
		
		u.getPostId();
		
		session.close();
		return u;
	}

	@Override
	public Picture getPictureById(int i) {
		Session session = HibernateUtil.getSession();
		Picture u = (Picture) session.get(Picture.class, i);
		
		u.getPictureId();
		
		session.close();
		return u;
	}

	@Override
	public User updateUser(User u) {
	Session session = HibernateUtil.getSession();
	Transaction tx = session.beginTransaction();
	session.update(u);
	tx.commit();
	session.close();
	return u;
	}

	@Override
	public Post updatePost(Post p) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
		session.close();
		return p;
	}

	@Override
	public Picture updatePicture(Picture p) {
		Session session = HibernateUtil.getSession();
		Transaction tx = session.beginTransaction();
		session.update(p);
		tx.commit();
		session.close();
		return p;
	}

	@Override
	public void deleteUser(User u) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deletePost(Post p) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deletePicture(Picture p) {
		// TODO Auto-generated method stub
		
	}

}
