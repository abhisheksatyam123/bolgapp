Here's a concise guide to install and use MySQL on your Ubuntu WSL system:

1. Update package lists:
   ```
   sudo apt update
   ```

2. Install MySQL:
   ```
   sudo apt install mysql-server
   ```

3. Start MySQL service:
   ```
   sudo service mysql start
   ```

4. Secure your MySQL installation:
   ```
   sudo mysql_secure_installation
   ```
   Follow the prompts to set a root password and other security options.

5. Log in to MySQL:
   ```
   sudo mysql -u root -p
   ```
   Enter the root password you set.

6. Create a new database:
   ```sql
   CREATE DATABASE your_database_name;
   ```

7. Create a new user and grant privileges:
   ```sql
   CREATE USER 'your_username'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON your_database_name.* TO 'your_username'@'localhost';
   FLUSH PRIVILEGES;
   ```

8. Exit MySQL:
   ```sql
   EXIT;
   ```

9. To start/stop/restart MySQL:
   ```
   sudo service mysql start
   sudo service mysql stop
   sudo service mysql restart
   ```

10. To use MySQL in your applications, install the MySQL connector:
    ```
    sudo apt install libmysqlclient-dev
    ```

## user specific mysql

[[userSpecificMysql]]
