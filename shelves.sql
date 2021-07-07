CREATE TABLE shelves (
s_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL,
category VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL
);

CREATE TABLE levels (
l_id SERIAL PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

CREATE TABLE book_arrangement(
ba_id SERIAL PRIMARY KEY,
s_id INT,
l_id INT,
b_id INT,
	CONSTRAINT fk_arrangement_shelves
      FOREIGN KEY(s_id) 
	  REFERENCES shelves(s_id)
		  ON DELETE CASCADE,
	CONSTRAINT fk_arrangement_levels
      FOREIGN KEY(l_id) 
	  REFERENCES levels(l_id)
		  ON DELETE SET NULL,
	CONSTRAINT fk_arrangement_books
      FOREIGN KEY(b_id) 
	  REFERENCES books(b_id)
		  ON DELETE CASCADE
<<<<<<< Updated upstream
);
=======
);

CREATE UNIQUE INDEX idx_book_arrangement
	ON book_arrangement(b_id, s_id);
>>>>>>> Stashed changes
