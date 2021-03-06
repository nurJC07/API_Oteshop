var express = require('express')
var router = express.Router()
const { categoryController} = require ('../controllers')

router.get('/getlistcategory', categoryController.getListCategory)

router.post('/addcategory', categoryController.addCategory)

router.put('/editcategory/:id', categoryController.editCategory)

router.delete('/deletecategory/:id', categoryController.deleteCategory)

module.exports = router;