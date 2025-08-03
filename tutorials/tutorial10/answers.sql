-- Exercise 1 (done for you): Selecting all columns
SELECT * FROM users;



-- Exercise 2 (done for you): Selecting some columns
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3: Sorting

SELECT id, first_name, last_name
FROM users
ORDER BY last_name;


-- Exercise 4: Filtering

SELECT id, user_id, image_url
FROM posts
WHERE user_id = 26;


-- Exercise 5: Filtering with logical operators

SELECT id, image_url, user_id
FROM posts
WHERE user_id IN (26, 12);


-- Exercise 6: Using functions in a select statement

SELECT COUNT(*) AS total_posts
FROM posts;


-- Exercise 7: Aggregating data

SELECT user_id, COUNT(*) AS comment_count
FROM comments
GROUP BY user_id
ORDER BY comment_count DESC;


-- Exercise 8: Joining: two tables

SELECT
    posts.id,
    posts.image_url,
    posts.user_id,
    users.username,
    users.first_name,
    users.last_name
FROM posts
JOIN users ON users.id = posts.user_id
WHERE posts.user_id IN (26, 12);


-- Exercise 9: More joining practice: two tables

SELECT
    posts.id AS post_id,
    posts.pub_date,
    following.id AS following_id
FROM posts
JOIN following ON posts.user_id = following.following_id
WHERE following.user_id = 26;



-- Exercise 10: More joining practice: three tables (Optional)

SELECT
    posts.id AS post_id,
    posts.pub_date,
    following.id AS following_id,
    users.username
FROM posts
JOIN following ON posts.user_id = following.following_id
JOIN users ON posts.user_id = users.id
WHERE following.user_id = 26
ORDER BY posts.pub_date DESC;


-- Exercise 11: Inserting records

INSERT INTO bookmarks (user_id, post_id) VALUES (26, 219);
INSERT INTO bookmarks (user_id, post_id) VALUES (26, 220);
INSERT INTO bookmarks (user_id, post_id) VALUES (26, 221);


-- Exercise 12: Deleting records

DELETE FROM bookmarks WHERE user_id = 26 AND post_id = 219;
DELETE FROM bookmarks WHERE user_id = 26 AND post_id = 220;
DELETE FROM bookmarks WHERE user_id = 26 AND post_id = 221;

-- Exercise 13: Updating records

UPDATE users
SET email = 'knick2022@gmail.com'
WHERE id = 26;

-- Exercise 14: More Querying Practice (Optional)

SELECT
    posts.id,
    posts.caption,
    COUNT(comments.id) AS comment_count
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
WHERE posts.user_id = 26
GROUP BY posts.id, posts.caption;