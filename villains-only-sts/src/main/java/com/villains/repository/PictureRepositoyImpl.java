package com.villains.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.villains.model.Picture;
import com.villains.model.Post;

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

	/* (non-Javadoc)
	 * @see com.villains.repository.PictureRepository#getPictureByUrl(java.lang.String)
	 */
	@Override
	public Picture getPictureByUrl(String url) {
		Session session = sessionFactory.getCurrentSession();
		
		String hql = "from Picture p where p.pictureUrl = :url";
		Picture picture = (Picture)session.createQuery(hql)
		.setParameter("url", url)
		.uniqueResult();
		
		return picture;
	}

	
}
