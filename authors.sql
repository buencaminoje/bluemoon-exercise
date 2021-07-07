CREATE TABLE authors (
a_id SERIAL PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
pen_name VARCHAR(50),
birthdate DATE
);