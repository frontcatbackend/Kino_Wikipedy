const Router = require('express')
const router = new Router
const ActorController = require('../controllers/actorController')

router.post('/create', ActorController.create)
router.get('/getall', ActorController.getAll)
router.put('/:id', ActorController.updateActor)
router.get('/:id', ActorController.getOne)


module.exports = router