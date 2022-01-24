const { Router } = require('express');
const Dog = require('../models/Dog');

module.exports = Router()
  .post('/', async (req, res, next) => {
    const dog = await Dog.insert({
      name: req.body.name,
      age: req.body.age,
      favoriteTreat: req.body.favoriteTreat,
    });
    res.send(dog);
  })
  .get('/:id', async (req, res, next) => {
    const dog = await Dog.get(req.params.id);
    res.send(dog);
  })
  .get('/', async (req, res, next) => {
    const dogs = await Dog.get();
    res.send(dogs);
  });
