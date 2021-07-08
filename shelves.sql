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
s_id INT NOT NULL,
l_id INT,
b_id INT NOT NULL,
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
);

CREATE UNIQUE INDEX idx_book_arrangement
	ON book_arrangement(b_id, s_id);

CREATE FUNCTION f_shelf_level(level int, shelf int)
returns int
language plpgsql
as $$
declare result_count integer;
begin
SELECT COUNT(*) INTO result_count FROM book_arrangement WHERE l_id = level  AND s_id != shelf;
return result_count;
end;
$$;

ALTER TABLE book_arrangement 
ADD CONSTRAINT chk_book_arrangement
CHECK (f_shelf_level(l_id, s_id) = 0)