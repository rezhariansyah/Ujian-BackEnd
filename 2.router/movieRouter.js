const router = require('express').Router()
const movieController = require('../3.controller/movieController')

// get semua data movies
router.get('/getAllMovies', movieController.getAllMovies)

// tampilkan data user
router.post('/addMovie' , movieController.addMovie)

// edit Movie
router.put('/editMovie/:id' , movieController.editMovieById)

// delete Movie
router.delete('/deleteMovie/:id' , movieController.deleteMovieById)


module.exports = router