CREATE TABLE shelves (
s_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL
);

CREATE TABLE levels (
l_id SERIAL PRIMARY KEY,
s_id INT,
name VARCHAR(255) NOT NULL,
CONSTRAINT fk_levels_shelf
      FOREIGN KEY(s_id) 
	  REFERENCES shelves(s_id)
		  ON DELETE CASCADE
);

ALTER TABLE books
	ADD COLUMN l_id INT,
	ADD CONSTRAINT fk_books_level
		FOREIGN KEY (l_id) 
		REFERENCES levels(l_id);