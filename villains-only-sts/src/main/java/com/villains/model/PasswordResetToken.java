package com.villains.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "password_reset_token")
public class PasswordResetToken {

	@Id
	@Column(name = "token_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tokenId;

	@Column(name = "token", nullable = false)
	private String token;

	@OneToOne
	private User user;

	public PasswordResetToken() {
	}

	public PasswordResetToken(String token, User user) {
		super();
		this.token = token;
		this.user = user;
	}

	public PasswordResetToken(int tokenId, String token, User user) {
		super();
		this.tokenId = tokenId;
		this.token = token;
		this.user = user;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getTokenId() {
		return tokenId;
	}
}
