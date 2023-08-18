1.CREATE DATABASE IMDB;

2.USE IMDB;

3.CREATE TABLE Movies(ID int, Title varchar(20), Cast varchar(15), Mulity_Media varchar(20), Realse_Date varchar(20), Collection_Data varchar(20), User_Review varchar(100), UserID int);


4.CREATE TABLE User(UserID int, UserEmail varchar(30), UserReview varchar(100));


5.CREATE TABLE artist(artist_id int PRIMARY KEY, name varchar(20), biography varchar(30));


6.CREATE TABLE artist_role(artist_id int, artist_role varchar(20), movie_id int, FOREIGN KEY(artist_id) REFERENCES artist, FOREIGN KEY(movie_id) REFERENCES Movies);


7.CREATE TABLE artist_skill(artist_id int, skill_id int, FOREIGN KEY(artist_id) REFERENCES artist, FOREIGN KEY(skill_id) REFERENCES skill);


8.CREATE TABLE media(media_id int PRIMARY KEY, movie_id int, media_type varchar(10), FOREIGN KEY(movie_id) REFERENCES Movies);

9.CREATE TABLE skill(skill_id int PRIMARY KEY, skill_name varchar(30));

10.Describe User;
11.Describe Movies;
12.Describe artist;
13.Describe artist_role;
14.Describe artist_skill;
15.Describe media;
16.Describe skill;
17.select * from User;
18.SELECT * from Movies;
19.SELECT * FROM artist;
20.SELECT * FROM artist_role;
21.SELECT * FROM artist_skill;
22.SELECT * FROM media;
23.SELECT * FROM skill;



