//package com.villains.main;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import com.villains.DAO.DAO;
//import com.villains.DAO.DAOImpl;
//import com.villains.model.Picture;
//import com.villains.model.Post;
//import com.villains.model.User;
//
//public class Main {
//	public static void main(String[] args) {
//		System.out.println("Main VVorks");
//		
//		DAO myDao = new DAOImpl();
//
//		User u1 = new User("Henry","Cavill","Email@email.com","password","Longview","Texas","");
//		User u2 = new User("Victor","Von Doom","Doom@hapi.com","password","Somewhere","Latvernia","");
//		User u3 = new User("Ares","","War@peace.com","password","Olympus","Greece","");
//		User u4 = new User("Zeus","","Shock@awe.com","password","Olympus","Greece","");
//		User u5 = new User("Tezzeret","","Email@email.com","password","Tidehollow","Esper","");
//		List <User> users = new ArrayList<>();
//
//		myDao.insertUser(u1);
//		myDao.insertUser(u2);
//		myDao.insertUser(u3);
//		myDao.insertUser(u4);
//		myDao.insertUser(u5);
//		
//		users= myDao.getAllUser();
//
//		Post p1 = new Post(myDao.getUserById(1),"I am Henry",null);
//		Post p2 = new Post(myDao.getUserById(2),"I am Victor",null);
//		Post p3 = new Post(myDao.getUserById(3),"I am Ares",null);
//		Post p4 = new Post(myDao.getUserById(4),"I am Zeus",null);
//		Post p5 = new Post(myDao.getUserById(5),"I am Tezzeret",null);
//		List <Post> posts = new ArrayList<>();
//		
//		myDao.insertPost(p1);		
//		myDao.insertPost(p2);		
//		myDao.insertPost(p3);		
//		myDao.insertPost(p4);		
//		myDao.insertPost(p5);
//		
//		posts = myDao.getAllPost();
//
//		Picture pc1 = new Picture(myDao.getPostById(6),"Henry's Pic");
//		Picture pc2 = new Picture(myDao.getPostById(7),"Doom's Pic");
//		Picture pc3 = new Picture(myDao.getPostById(8),"Ares's Pic");
//		Picture pc4 = new Picture(myDao.getPostById(9),"Zeus's Pic");
//		Picture pc5 = new Picture(myDao.getPostById(10),"Tezzeret's Pic");
//		List <Picture> pictures = new ArrayList<>();
//
//		myDao.insertPicture(pc1);
//		myDao.insertPicture(pc2);
//		myDao.insertPicture(pc3);
//		myDao.insertPicture(pc4);
//		myDao.insertPicture(pc5);
//		
//		pictures = myDao.getAllPicture();
//		
//		System.out.println("Users:");
//		for(User user:users) {
//			System.out.println(user);
//		}
//		
//		System.out.println("Posts:");
//		for(Post post:posts) {
//			System.out.println(post);
//		}
//
//		System.out.println("Pictures:");
//		for (Picture picture : pictures) {
//			System.out.println(picture);
//		}
//		
//		
//		
//		
//	}
//}
