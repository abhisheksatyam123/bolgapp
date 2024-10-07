

# creating databse


1. First, log into MySQL:
switching to user
```
mysql -u abhi -p
```

with password

```
dandacon
```


```
GRANT ALL PRIVILEGES ON *.* TO 'abhi'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```
2. Create a new database:

   ```sql
   CREATE DATABASE blog;
   ```

3. Switch to the new database:

   ```sql
   USE blog;
   ```

4. Create a table:

   Let's create a simple "users" table as an example:

   ```sql
      CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL UNIQUE,
       email VARCHAR(100) NOT NULL UNIQUE,
       image VARCHAR(100) NOT NULL UNIQUE,
       password VARCHAR(100) NOT NULL ,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

```sql
   CREATE TABLE posts(
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(50) NOT NULL UNIQUE,
   `desc` VARCHAR(1000) NOT NULL UNIQUE,  -- Use backticks as `desc` is a reserved word in SQL
   img VARCHAR(100) NOT NULL UNIQUE,
   uid INT NOT NULL,  -- Changed to INT to match the id type of users
   date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   FOREIGN KEY (uid) REFERENCES users(id) ON DELETE CASCADE
);
```


5. Verify the table was created:

   ```sql
   DESCRIBE users;
   ```

6. Insert some data:
- into users table 

```sql
INSERT INTO users (username, email, image, password)
VALUES 
('user1', 'user1@example.com', 'user1.jpg', 'password123'),
('user2', 'user2@example.com', 'user2.jpg', 'password456'),
('user3', 'user3@example.com', 'user3.jpg', 'password789');
```
- into posts table

```sql
INSERT INTO posts (title, `desc`, img, uid)
VALUES 
('First Post', 'This is the description of the first post.', 'post1.jpg', 1),
('Second Post', 'This is the description of the second post.', 'post2.jpg', 2),
('Third Post', 'This is the description of the third post.', 'post3.jpg', 1);
```

7. View the data:

   ```sql
   SELECT * FROM users;
   ```




