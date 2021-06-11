const { Actor, Movie, ActorsFilms } = require("../models/models");

class ActorController {
  async create(req, res, next) {
    try {
      let actor = await Actor.create(req.body, { include: [Movie] });
      return res.json(actor);
    } catch (err) {}
  }
  async getAll(req, res, next) {
    try {
      let actors = await Actor.findAll({ include: Movie });
      return res.json(actors);
    } catch (err) {}
  }

  async getOne(req, res, next) {
    try {
      let actor = await Actor.findByPk(req.params.id, { include: Movie });
      return res.json(actor);
    } catch (err) {}
  }

  async updateActor(req, res, next) {
    try {
      const { id } = req.params;
      let update_actor = await Actor.update(req.body, { where: { id: id}, include:[Movie]} ) ;
      let create_movie = await Movie.create(req.body)
      //Как добавить новый фильм к актёру?
      // await update_actor.addMovie([create_movie]) // не работает
      let updated = await Actor.findByPk(id, { include: [Movie] });
      return res.json(updated);
    } catch (err) {}
  }
}

module.exports = new ActorController();
