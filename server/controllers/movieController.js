const { Movie, Actor, Genre, Country, Produsser } = require("../models/models");

class MovieController {
  async create(req, res, next) {
    try {
      let movie = await Movie.create(req.body, {include:[Actor]});
      return res.json(movie);
    } catch (err) {

    }
  }

  async getAll(req, res, next) {
    try {
      let movies = await Movie.findAll({include:[ Actor, Genre, Country, Produsser]});
      return res.json(movies);
    } catch (err) {

    }
  }

  async updateMovie(req, res, next){
    try{
   const update_movie = await Movie.update(req.body, {where:{id:req.params}})
   return res.json(update_movie)
    }catch(err){

    }
  }

}


module.exports = new MovieController()