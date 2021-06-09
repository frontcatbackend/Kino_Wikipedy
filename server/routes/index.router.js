const Router = require('express')
const router = new Router

router.get('/test', (req, res)=>{
 res.status(200).json({message:"Hello Test Json"})
})

module.exports = router