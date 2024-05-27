-- Use the wellness_watcher database
USE wellness_watcher;

-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert initial user data
INSERT IGNORE INTO users (username, password) VALUES ('ehab2001', 'admin123');
INSERT IGNORE INTO users (username, password) VALUES ('kathryn2004', 'admin456');

-- Select all users
SELECT * FROM users;

