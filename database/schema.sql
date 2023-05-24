-- live data v
-- /Users/ericlee/Downloads/characteristics.csv

DROP DATABASE IF EXISTS sdcreviews;
CREATE DATABASE sdcreviews;

\c sdcreviews;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INT,
  rating SMALLINT CHECK (rating > 0 AND rating < 6),
  date BIGINT,
  summary TEXT,
  body TEXT,
  recommend BOOLEAN,
  reported BOOLEAN DEFAULT false,
  reviewer_name TEXT,
  reviewer_email TEXT,
  response TEXT DEFAULT '',
  helpfulness INT DEFAULT 0
);


DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id SERIAL PRIMARY KEY,
  product_id INT,
  name TEXT
);


DROP TABLE IF EXISTS characteristics_reviews;

CREATE TABLE characteristics_reviews (
  id SERIAL PRIMARY KEY,
  characteristic_id INT,
  review_id INT,
  value SMALLINT CHECK (value > 0 AND value < 6)
);


DROP TABLE IF EXISTS reviews_photos;

CREATE TABLE reviews_photos (
  id SERIAL PRIMARY KEY,
  review_id INT,
  url TEXT
);

COPY reviews(id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness)
FROM '/Users/ericlee/HackReactor/Reviews-Backend/ETL_Test/reviews.csv'
DELIMITER ','
CSV HEADER;

COPY characteristics(id, product_id, name)
FROM '/Users/ericlee/HackReactor/Reviews-Backend/ETL_Test/characteristics.csv'
DELIMITER ','
CSV HEADER;

COPY characteristics_reviews(id, characteristic_id, review_id, value)
FROM '/Users/ericlee/HackReactor/Reviews-Backend/ETL_Test/characteristics_reviews.csv'
DELIMITER ','
CSV HEADER;

COPY reviews_photos(id, review_id, url)
FROM '/Users/ericlee/HackReactor/Reviews-Backend/ETL_Test/reviews_photos.csv'
DELIMITER ','
CSV HEADER;
