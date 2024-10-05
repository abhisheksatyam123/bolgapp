

# creating databse



1. First, log into MySQL:
switching to user
```
mysql -u new_username -p
```

with password

```
dandacon
```


2. Create a new database:

   ```sql
   CREATE DATABASE example_db;
   ```

3. Switch to the new database:

   ```sql
   USE example_db;
   ```

4. Create a table:

   Let's create a simple "users" table as an example:

   ```sql
   CREATE TABLE users (
       id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL UNIQUE,
       email VARCHAR(100) NOT NULL UNIQUE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

   This creates a table with:
   - An auto-incrementing ID as the primary key
   - A username (max 50 characters, must be unique)
   - An email (max 100 characters, must be unique)
   - A timestamp for when the record was created

5. Verify the table was created:

   ```sql
   DESCRIBE users;
   ```

6. Insert some data:

   ```sql
   INSERT INTO users (username, email) VALUES 
   ('john_doe', 'john@example.com'),
   ('jane_smith', 'jane@example.com');
   ```

7. View the data:

   ```sql
   SELECT * FROM users;
   ```




