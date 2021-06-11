const Router = require('express')
const router = new Router
const MovieController = require('../controllers/movieController')

router.post('/create', MovieController.create)
router.get('/getall', MovieController.getAll)
router.put('/:id', MovieController.updateMovie)


module.exports = router