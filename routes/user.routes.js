const express = require('express')
const router = express.Router();
const { getAllProducts } = require ("../controllers/user.controller.js")

router.route ("/getallproducts").get (getAllProducts)


module.exports = router;