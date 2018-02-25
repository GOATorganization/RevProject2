package com.villains.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
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
	@OneToMany(fetch = FetchType.EAGER)
	private List<Picture> contentsPic;
	
	/*@ManyToMany
	@JoinColumn(name="like_list")
	private List<Integer> likeList;*/
	
	public Post() {
		
	}

	public Post(User userId, String contentsText, List<Picture> contentsPic/*, List<Integer> likeList*/) {
		super();
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
		//this.likeList = likeList;
	}

	public Post(int postId, User userId, String contentsText, List<Picture> contentsPic/*, List<Integer> likeList*/) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
		//this.likeList = likeList;
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

	/*public List<Integer> getLikeList() {
		return likeList;
	}

	public void setLikeList(List<Integer> likeList) {
		this.likeList = likeList;
	}*/

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId.getUserId() + ", contentsText=" + contentsText + ", contentsPic="
				+ contentsPic + /*", likeList=" + likeList +*/ "]";
	}
	
	
	
	
}
