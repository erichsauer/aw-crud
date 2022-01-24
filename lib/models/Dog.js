const pool = require('../utils/pool');

module.exports = class Dog {
  id;
  name;
  age;
  favoriteTreat;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.favoriteTreat = row.favorite_treat;
  }

  static async insert({ name, age, favoriteTreat }) {
    const { rows } = await pool.query(
      `
    INSERT INTO dogs (name, age, favorite_treat) VALUES ($1, $2, $3) RETURNING *`,
      [name, age, favoriteTreat]
    );

    return new Dog(rows[0]);
  }

  static async get(id) {
    if (id) {
      const { rows } = await pool.query(
        `
    SELECT * FROM dogs WHERE id=$1`,
        [id]
      );
      return new Dog(rows[0]);
    }
    const { rows } = await pool.query(
      `
    SELECT * FROM dogs`
    );
    return rows.map((row) => new Dog(row));
  }
};
