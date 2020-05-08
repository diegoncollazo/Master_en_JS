"use strict";

var express = require("express");
var proyectController = require("../controllers/project");

var router = express.Router();

router.get('/home', proyectController.home);
router.post('/test', proyectController.test);

module.exports = router;