const Router = require('express')
const router = new Router
const actorRouter = require('../routes/actorRouter')
const genreRouter = require('../routes/genreRouter')
const movieRouter = require('../routes/movieRouter')
const produsserRouter = require('../routes/produsserRouter')
const serialRouter = require('../routes/serialRouter')
const userRouter = require('../routes/userRouter')
const countryRouter = require('../routes/countryRouter')

// router.get('/test', (req, res)=>{
//  res.status(200).json({message:"Hello Test Json"})
// })

router.use('/actor', actorRouter)
router.use('/produsser',produsserRouter)
router.use('/movie', movieRouter)
router.use('/serial', serialRouter)
router.use('/country', countryRouter)
router.use('/genre', genreRouter)
router.use('/user', userRouter)

module.exports = router