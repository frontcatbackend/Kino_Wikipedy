const { Actor, Movie } = require("../models/models");

class ActorController {
  async create(req, res, next) {
    try {
      let actor = await Actor.create(req.body, {include:[Movie]});
      return res.json(actor);
    } catch (err) {

    }
  }
  async getAll(req, res, next) {
    try {
      let actors = await Actor.findAll({include: Movie});
      return res.json(actors);
    } catch (err) {

    }
  }

  async updateActor(req, res, next){
    try{
    const id = req.params.id
    const movies = req.body.movies
    const updating = await Actor.update(req.body,{
      where: {id: id},
    })
    res.json("Updating")
    }catch(err){

    }
  }
}

module.exports = new ActorController();
