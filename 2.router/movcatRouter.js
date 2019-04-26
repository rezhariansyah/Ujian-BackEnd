const router = require('express').Router()
const movieController = require('../3.controller/movcatController')

// get semua movie dan category
router.get('/getMovCat', movieController.getMovCat)



module.exports = router