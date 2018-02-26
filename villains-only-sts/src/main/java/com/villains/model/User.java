package com.villains.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * 
 * @author Chaos
 *
 */

@Entity
@Table(name="villain_user")
public class User {
	
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int userId;

	@Column(name="f_name", nullable = false)
	private String firstName;

	@Column(name="l_name", nullable = false)
	private String lastName;

	@Column(name="user_email", nullable = false, unique = true)
	private String email;
	
	@Column(name="user_password", nullable = false)
	private String password;

	@Column(name="lair_city")
	private String lairCity;

	@Column(name="lair_country")
	private String lairCountry;

	@Column
	private String profilePic;
	
	@OneToMany(mappedBy = "postId" ,fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<Post> posts;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="password_reset_id", nullable = true)
	private PasswordResetToken pwResetToken;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name="likes", 
	    joinColumns=@JoinColumn(name="user_id"), 
	    inverseJoinColumns=@JoinColumn(name="post_id")) 
	private List<Post> likes;
	
	public User() {
		
	}

	/**
	 * 
	 * @param firstName
	 * @param lastName
	 * @param email
	 * @param password
	 * @param lairCity
	 * @param lairCountry
	 * @param profilePic
	 */
	public User( String firstName, String lastName, String email,String password, String lairCity, String lairCountry, String profilePic) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.lairCity = lairCity;
		this.lairCountry = lairCountry;
		this.profilePic = profilePic;
	}

	public User(int userId, String firstName, String lastName, String email,String password, String lairCity, String lairCountry,String profilePic) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.lairCity = lairCity;
		this.lairCountry = lairCountry;
		this.profilePic = profilePic;
	}

	public User(int userId, String firstName, String lastName, String email, String password, String lairCity,
			String lairCountry, String profilePic, List<Post> posts, PasswordResetToken pwResetToken,
			List<Post> likes) {
		super();
		this.userId = userId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.lairCity = lairCity;
		this.lairCountry = lairCountry;
		this.profilePic = profilePic;
		this.posts = posts;
		this.pwResetToken = pwResetToken;
		this.likes = likes;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String Password) {
		this.password = Password;
	}

	public String getLairCity() {
		return lairCity;
	}

	public void setLairCity(String lairCity) {
		this.lairCity = lairCity;
	}

	public String getLairCountry() {
		return lairCountry;
	}

	public void setLairCountry(String lairCountry) {
		this.lairCountry = lairCountry;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(List<Post> posts) {
		this.posts = posts;
	}

	public PasswordResetToken getPwResetToken() {
		return pwResetToken;
	}

	public void setPwResetToken(PasswordResetToken pwResetToken) {
		this.pwResetToken = pwResetToken;
	}

	public List<Post> getLikes() {
		return likes;
	}

	public void setLikes(List<Post> likes) {
		this.likes = likes;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", password=" + password + ", lairCity=" + lairCity + ", lairCountry=" + lairCountry +", profilePic=" + profilePic + "]";
	}
	
	

}
