select * from villain_user;

select * from post;

select * from picture;

select * from post_picture;

Truncate table villain_user;

INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password, lair_ciry, lair_country)
    VALUES ( hibernate_sequence.NEXTVAL, 'Sincere@april.biz', 'Leanne' , 'Graham', '123','Gwenborough', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Shanna@melissa.tv', 'Ervin' , 'Howell', 'asdf','Wisokyburgh', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Nathan@yesenia.net', 'Clementine' , 'Bauch', 'asdf','McKenziehaven', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Julianne.OConner@kory.org', 'Patricia' , 'Lebsack', 'asdf','South Elvis', 'USA');

INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Lucio_Hettinger@annie.ca', 'Chelsey' , 'Dietrich', 'asdf','Roscoeview', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    values ( HIBERNATE_SEQUENCE.NEXTVAL, 'Karley_Dach@jasper.info', 'Dennis' , 'Schulist', 'asdf','South Christy', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Telly.Hoeger@billy.biz', 'Kurtis' , 'Weissnat', 'asdf','Gwenborough', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Sherwood@rosamond.me', 'Nicholas' , 'Runolfsdottir ', 'asdf','Aliyaview', 'USA');

INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    VALUES ( hibernate_sequence.NEXTVAL, 'Chaim_McDermott@dana.io', 'Glenna' , 'Reichert', 'asdf','Gwenborough', 'USA');
    
INSERT INTO villain_user (user_id, user_email, f_name, l_name, user_password)
    values ( HIBERNATE_SEQUENCE.NEXTVAL, 'Rey.Padberg@karina.biz', 'Clementina' , 'DuBuque', 'asdf','Lebsackbury', 'USA');
   
    
INSERT INTO post (post_id, contents_txt, user_id) 
    values (HIBERNATE_SEQUENCE.NEXTVAL, 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' , 1);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' , 1);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut' , 3);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit' , 4);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque' , 3);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae' , 5);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas' , 8);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae' , 4);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Liquorice powder brownie dragée topping candy canes biscuit dessert. Halvah cookie biscuit ice cream dessert gummi bears I love cheesecake. Chocolate bar gummies gummi bears marshmallow chocolate bar chocolate bar' , 5);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Danish cookie chocolate cake bear claw I love wafer marzipan cupcake cookie. Tiramisu sugar plum sesame snaps carrot cake halvah I love caramels. Donut bonbon cookie muffin I love icing cookie icing. Marshmallow topping icing pastry.' , 5);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Cake cake chocolate bar chupa chups sweet. Soufflé soufflé macaroon tart cake I love. Jelly-o macaroon I love I love tiramisu dragée fruitcake I love pudding. Jelly gummi bears sweet gummi bears ice cream fruitcake gummies I love marshmallow.' , 6);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Chocolate pastry powder croissant cake pie. Marshmallow jelly-o sugar plum dessert dragée brownie sugar plum. Sweet dessert oat cake chocolate cake.' , 3);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Lollipop I love sweet roll cheesecake I love powder marshmallow. Macaroon tiramisu oat cake. Cookie ice cream topping gummi bears donut candy soufflé dessert donut. Donut lemon drops carrot cake danish.' , 3);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Bonbon I love sesame snaps lollipop toffee cotton candy bonbon ice cream bonbon. Cupcake gummi bears tiramisu chocolate cake. Dessert soufflé gummi bears I love sweet roll bonbon jujubes icing sweet roll.' , 5);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Chocolate I love I love donut cheesecake toffee sweet roll. Candy I love carrot cake I love brownie chocolate bar marzipan icing caramels. Macaroon lemon drops pastry marzipan cake jelly beans I love I love halvah.' , 1);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Danish halvah candy I love macaroon. Marshmallow cookie gummi bears biscuit fruitcake jelly dragée. Chupa chups tart I love.' , 2);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Fruitcake I love croissant. Chocolate cake pastry oat cake I love apple pie powder I love biscuit. Halvah toffee I love sweet roll powder. Wafer oat cake tootsie roll I love.' , 3);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'I love fruitcake marshmallow. Fruitcake soufflé cheesecake fruitcake chocolate cake cupcake. Cotton candy pastry sweet roll macaroon chupa chups topping oat cake bear claw. Chocolate bar chocolate cake gummi bears chocolate bar apple pie.' , 4);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Marshmallow tart oat cake gummi bears pie gummi bears. Soufflé jujubes tiramisu I love tootsie roll halvah. Soufflé donut icing danish I love pudding. Cheesecake gingerbread cupcake carrot cake chupa chups jelly-o.' , 6);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Powder macaroon carrot cake topping. Biscuit jujubes donut gummi bears chocolate bar danish. Gummi bears topping jelly-o brownie dessert muffin jujubes gummies.' , 4);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Jelly bonbon wafer jelly beans pudding sweet. Sweet cheesecake biscuit. Sugar plum halvah icing cupcake.' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Cupcake tart biscuit gummi bears cake candy canes jelly pudding. Tiramisu tart carrot cake. Apple pie I love gummies soufflé halvah biscuit chocolate cake jelly-o.' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Macaroon pudding chocolate bar gummies. Cotton candy macaroon toffee. Sweet cake ice cream gingerbread cookie biscuit jelly beans candy canes.' , 2);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Cake lemon drops marshmallow jelly beans candy canes tootsie roll. Lemon drops cake I love pudding tiramisu carrot cake tart. Lollipop I love lemon drops icing I love tart. Cake soufflé tootsie roll jujubes I love lollipop sugar plum.' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Bonbon wafer marzipan liquorice. Lollipop muffin sweet roll jujubes lollipop lollipop chupa chups I love sesame snaps. Tiramisu halvah halvah dessert.' , 1);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Dessert bear claw fruitcake carrot cake sweet roll sweet roll muffin jujubes. Chocolate cake cake candy I love bear claw tootsie roll sugar plum. Powder jelly dessert chupa chups jelly chocolate bar muffin.' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Bear claw macaroon danish cheesecake I love muffin ice cream donut. I love tiramisu pudding sesame snaps donut cotton candy. Dessert lollipop donut I love marshmallow. Lollipop topping pudding I love lollipop gummi bears chocolate bonbon.' , 2);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Croissant cake apple pie cake. I love candy tootsie roll gummi bears macaroon chupa chups. Bear claw sugar plum gingerbread oat cake apple pie gingerbread marzipan.' , 2);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Jelly-o sugar plum pastry cookie. Cheesecake sweet roll I love chocolate marzipan candy canes. Gummies donut wafer I love halvah oat cake I love lollipop. Pastry fruitcake I love jelly beans candy canes.' , 2);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Sesame snaps chocolate bar I love jelly-o apple pie icing lollipop. Oat cake cheesecake biscuit marzipan. I love jujubes sweet I love cake. Chupa chups toffee jelly.' , 3);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Gummies candy canes jelly candy lollipop I love. Apple pie chupa chups bonbon jelly-o jujubes. Croissant pie carrot cake chocolate bar lemon drops.' , 3);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Pie fruitcake tootsie roll chocolate I love macaroon jelly-o cake dessert. I love fruitcake marshmallow bear claw. I love cake caramels ice cream jelly-o I love donut tootsie roll.' , 3);
INSERT INTO post (post_id, contents_txt, user_id) VALUES (hibernate_sequence.NEXTVAL, 'Sesame snaps candy canes dragée. I love lollipop fruitcake croissant cake. Bonbon cookie soufflé cookie.' , 4);
insert into post (post_id, contents_txt, user_id) values (HIBERNATE_SEQUENCE.NEXTVAL, 'Candy canes cheesecake bear claw I love pie marzipan. Ice cream dessert chocolate I love brownie. Ice cream toffee I love. Candy canes brownie I love dragée carrot cake.' , 4);




--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 51, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 52, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 51, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 51, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 51, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 51, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 64, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 65, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 65, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 61, 'http://via.placeholder.com/600x600');
--INSERT INTO picture (picture_id, post_id, picture_url) 
--    VALUES (hibernate_sequence.NEXTVAL, 70, 'http://via.placeholder.com/600x600');

commit;
