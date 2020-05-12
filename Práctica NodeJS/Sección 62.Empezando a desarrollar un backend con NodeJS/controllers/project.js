"use strict";
var Project = require("../models/project");
var controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: "Soy la home",
		});
	},
	test: function (req, res) {
		return res.status(200).send({
			message: "Soy el metodo test del controlador project",
		});
	},
	saveProject: function (req, res) {
		var project = new Project();

		var params = req.body;

		return res.status(200).send({
			params: params,
			message: "Metodo saveProjetc",
		});
	},
};
module.exports = controller;
