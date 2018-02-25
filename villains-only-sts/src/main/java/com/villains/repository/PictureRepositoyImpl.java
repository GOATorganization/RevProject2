package com.villains.repository;

import java.util.List;

import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.villains.model.Picture;
import com.villains.model.Post;
import com.villains.model.User;

@Repository("pictureRepositoryImpl")
@Transactional
public class PictureRepositoyImpl implements PictureRepository {
	
	@Autowired
	private SessionFactory sessionFactory;

	@SuppressWarnings("unchecked")
	@Override
	public List<Picture> getAllPicture() {
		return sessionFactory.getCurrentSession().createCriteria(Picture.class).list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Picture> getAllPictureByPost(Post post) {
		try {
			return (List<Picture>) sessionFactory.getCurrentSession().createCriteria(Picture.class)
					.add(Restrictions.like("post", post))
					.list();
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
		
	}

	@Override
	public void editPicture(Picture picture) {
		sessionFactory.getCurrentSession().update(picture);
	}

	@Override
	public void addPicture(Picture picture) {
		sessionFactory.getCurrentSession().save(picture);
	}

	@Override
	public void deletePicture(Picture picture) {
		sessionFactory.getCurrentSession().delete(picture);
	}

}
