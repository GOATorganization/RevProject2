package com.villains.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

public class Post {

	@Id
	@Column(name="post_id")
	private int postId;
	
	@OneToOne
	@JoinColumn(name="user_id")
	private int userId;
	
	@Column(name="contents_txt")
	private String contentsText;
	
	@Column(name="contents_pics")
	private List<String> contentsPic;
	
	@OneToMany
	@JoinColumn(name="list_list")
	private List<Integer> likeList;
	
	public Post() {
		
	}

	public Post(int userId, String contentsText, List<String> contentsPic, List<Integer> likeList) {
		super();
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
		this.likeList = likeList;
	}

	public Post(int postId, int userId, String contentsText, List<String> contentsPic, List<Integer> likeList) {
		super();
		this.postId = postId;
		this.userId = userId;
		this.contentsText = contentsText;
		this.contentsPic = contentsPic;
		this.likeList = likeList;
	}

	public int getPostId() {
		return postId;
	}

	public void setPostId(int postId) {
		this.postId = postId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getContentsText() {
		return contentsText;
	}

	public void setContentsText(String contentsText) {
		this.contentsText = contentsText;
	}

	public List<String> getContentsPic() {
		return contentsPic;
	}

	public void setContentsPic(List<String> contentsPic) {
		this.contentsPic = contentsPic;
	}

	public List<Integer> getLikeList() {
		return likeList;
	}

	public void setLikeList(List<Integer> likeList) {
		this.likeList = likeList;
	}

	@Override
	public String toString() {
		return "Post [postId=" + postId + ", userId=" + userId + ", contentsText=" + contentsText + ", contentsPic="
				+ contentsPic + ", likeList=" + likeList + "]";
	}
	
	
	
	
}
