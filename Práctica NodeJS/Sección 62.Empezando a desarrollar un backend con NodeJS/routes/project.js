"use strict";

var express = require("express");
var ProjectController = require("../controllers/project");

var router = express.Router();

router.get("/home", ProjectController.home);
router.post("/test", ProjectController.test);
router.post("/save-project", ProjectController.saveProyect);
router.get("/project/:id?", ProjectController.getProyect);

module.exports = router;
