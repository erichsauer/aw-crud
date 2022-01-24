-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS dogs;

CREATE TABLE dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  age INT NOT NULL,
  favorite_treat TEXT NOT NULL
)
