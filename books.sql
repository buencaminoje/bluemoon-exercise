CREATE TABLE books (
b_id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
publish_year DATE
);

CREATE TABLE book_authors (
ba_id SERIAL PRIMARY KEY,
a_id INT,
b_id INT,
CONSTRAINT fk_book_authors_author
	FOREIGN KEY(a_id) 
		REFERENCES authors(a_id)
			ON DELETE SET NULL,
CONSTRAINT fk_book_authors_books
	FOREIGN KEY(b_id) 
		REFERENCES books(b_id)
			ON DELETE CASCADE
);