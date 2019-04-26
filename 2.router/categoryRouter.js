const router = require('express').Router()
const categoryController = require('../3.controller/categoryController')

// get semua Category
router.get('/getAllCategory', categoryController.getCategory)

// tambah Category
router.post('/addCategory', categoryController.addCategory)

// edit Category list
router.put('/editCategory/:id', categoryController.editCategory)

// delete Category
router.delete('/deleteCategory/:id', categoryController.deleteCategory)

module.exports = router