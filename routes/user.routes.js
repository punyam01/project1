const express = require('express')
const router = express.Router();
const { getAllData } = require ("../controllers/user.controller.js")

router.route ("/data").get (getAllData)


module.exports = router;