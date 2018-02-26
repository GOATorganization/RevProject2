package com.villains.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="post")
public class Post {

	@Id
	@Column(name="post_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int postId;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="user_id",nullable = false)
	private User userId;
	
	@Column(name="contents_txt")
	private String contentsText;
		
	@Column(name="contents_pics")
	@OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Picture> contentsPic;
	
	@ManyToMany(mappedBy="likes") 
	private List<User> likers;
	
	public Post() {
		
	}

	public Post(User userId, String contentsText, List<Picture> contentsPic/*, List<Integer> likeList*/) {
		super();
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
	}

	public Post(int postId, User userId, String contentsText, List<Picture> contentsPic/*, List<Integer> likeList*/) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
	}
	
	public Post(int postId, User userId, String contentsText, List<Picture> contentsPic, List<User> likers) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
		this.likers = likers;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public String getContentsText() {
		return contentsText;
	}

	public void setContentsText(String contentsText) {
		this.contentsText = contentsText;
	}

	public List<Picture> getContentsPic() {
		return contentsPic;
	}

	public void setContentsPic(List<Picture> contentsPic) {
		this.contentsPic = contentsPic;
	}

	public List<User> getLikers() {
		return likers;
	}

	public void setLikers(List<User> likers) {
		this.likers = likers;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId.getUserId() + ", contentsText=" + contentsText + ", contentsPic="
				+ contentsPic + /*", likeList=" + likeList +*/ "]";
	}
	
	
	
	
}
