"use strict";

var express = require("express");
var proyectController = require("../controllers/project");
//Router()
var router = express.Router();

router.get('/home', proyectController.home);
router.post('/test', proyectController.test);
router.post('/save-project', proyectController.saveProject);

module.exports = router;