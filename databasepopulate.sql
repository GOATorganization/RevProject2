select * from villain_user;

select * from post;

select * from picture;

SELECT * FROM post_picture;

select * from likes;

SELECT post_id, contents_txt, user_id, contentspic_picture_id as picture_id FROM post LEFT JOIN post_picture 
on post.POST_ID = post_picture.post_post_id;



commit;
