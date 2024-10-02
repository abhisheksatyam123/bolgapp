Certainly, I can help you with that. Here's how you can view users, databases, and related information in MySQL:

1. First, log in to MySQL as root:
   ```
   sudo mysql -u root -p
   ```

2. To see all users:
   ```sql
   SELECT User, Host FROM mysql.user;
   ```

3. To see all databases:
   ```sql
   SHOW DATABASES;
   ```

4. To see which user has access to which database:
   ```sql
   SELECT user, host, db FROM mysql.db;
   ```

5. To see detailed privileges for a specific user:
   ```sql
   SHOW GRANTS FOR 'username'@'localhost';
   ```

6. To see all tables in a specific database:
   ```sql
   USE database_name;
   SHOW TABLES;
   ```

7. To see the structure of a specific table:
   ```sql
   DESCRIBE table_name;
   ```

8. To see the creation statement of a table:
   ```sql
   SHOW CREATE TABLE table_name;
   ```

9. To see all active processes:
   ```sql
   SHOW PROCESSLIST;
   ```

10. To see MySQL server status:
    ```sql
    SHOW STATUS;
    ```

11. To see MySQL server variables:
    ```sql
    SHOW VARIABLES;
    ```

