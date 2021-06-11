const { Actor } = require("../models/models");

class ActorController {
  async create(req, res, next) {
    try {
      const actor = await Actor.create(req.body);
      return res.json(actor);
    } catch (err) {

    }
  }
  async getAll(req, res, next) {
    try {
      const actors = await Actor.findAll();
      return res.json(actors);
    } catch (err) {
      
    }
  }
}

module.exports = new ActorController();
