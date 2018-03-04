package com.villains.repository;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.villains.model.User;

@Repository("userRepositoryImpl")
@Transactional
public class UserRepositoryImpl implements UserRepository {
	
	@Autowired
	private SessionFactory sessionFactory;

	/*
	 * (Javadoc)
	 * @see com.villains.repository.UserRepository#selectAll()
	 */
	@SuppressWarnings("unchecked")
	@Override
	public List<User> selectAll() {
		return sessionFactory.getCurrentSession().createCriteria(User.class).list();
	}

	@Override
	public User findByName(String fname, String lname) {
		try {
			return (User) sessionFactory.getCurrentSession().createCriteria(User.class)
					.add(Restrictions.like("firstName", fname))
					.add(Restrictions.like("lastName", lname))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}

	@Override
	public void create(User user) {
		sessionFactory.getCurrentSession().save(user);
	}

	@Override
	public User findByEmail(String email) {
		try {
			return (User) sessionFactory.getCurrentSession().createCriteria(User.class)
					.add(Restrictions.like("email", email))
					.list()
					.get(0);
		} catch (IndexOutOfBoundsException e) {
			return null;
		}
	}

	@Override
	public void update(User user) {
		sessionFactory.getCurrentSession().update(user);
	}

	@Override
	public void updateIgnorePass(User user) {
		String hql = "UPDATE User set USER_EMAIL = :email, F_NAME = :fname,"
				+ " L_NAME = :lname, LAIR_CITY = :lairCity,"
				+ "LAIR_COUNTRY = :lairCountry, PROFILEPIC = :profilePic "  + 
	             "WHERE USER_ID = :villainId";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		query.setParameter("email", user.getEmail());
		query.setParameter("fname", user.getFirstName());
		query.setParameter("lname", user.getLastName());
		query.setParameter("lairCity", user.getLairCity());
		query.setParameter("lairCountry", user.getLairCountry());
		query.setParameter("profilePic", user.getProfilePic());
		query.setParameter("villainId", user.getUserId());
		int result = query.executeUpdate();
		
	}

}
