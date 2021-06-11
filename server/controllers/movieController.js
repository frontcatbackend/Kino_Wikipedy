const { Movie, Actor, Genre, Country, Produsser } = require("../models/models");

class MovieController {
  async create(req, res, next) {
    try {
      const movie = await Movie.create(req.body);
      return res.json(movie);
    } catch (err) {

    }
  }

  async getAll(req, res, next) {
    try {
      const movies = await Movie.findAll({include:[ Actor, Genre, Country, Produsser]});
      return res.json(movies);
    } catch (err) {

    }
  }
}


module.exports = new MovieController()