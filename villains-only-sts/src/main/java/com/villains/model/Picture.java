package com.villains.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="Picture")
public class Picture {

	@Id
	@Column(name="picture_id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int pictureId;
	

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="post_id")
	private Post post;
	
	@Column(name="picture_url", nullable = false)
	private String pictureUrl;
	
	public Picture() {
		
	}

	public Picture( Post post, String pictureUrl) {
		super();
		this.post = post;
		this.pictureUrl = pictureUrl;
	}

	public Picture(int pictureId, Post post, String pictureUrl) {
		super();
		this.pictureId = pictureId;
		this.post = post;
		this.pictureUrl = pictureUrl;
	}

	public int getPictureId() {
		return pictureId;
	}

	public void setPictureId(int pictureId) {
		this.pictureId = pictureId;
	}

	public Post getPostId() {
		return post;
	}

	public void setPostId(Post post) {
		this.post = post;
	}

	public String getPictureUrl() {
		return pictureUrl;
	}

	public void setPictureUrl(String pictureUrl) {
		this.pictureUrl = pictureUrl;
	}

	@Override
	public String toString() {
		return "Picture [pictureId=" + pictureId + ", post=" + post.getPostId() + ", pictureUrl=" + pictureUrl + "]";
	}
	
	
	
}
