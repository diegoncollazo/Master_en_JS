"use strict";
var Project = require("../models/project");

var controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: "Soy la HOME",
		});
	},
	test: function (req, res) {
		return res.status(200).send({
			message: "Soy el metodo TEST del controlador Proyect.",
		});
	},
	saveProyect: function (req, res) {
		var project = new Project();

        var params = req.body;
        
		project.name = params.name;
		project.description = params.description;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) => {
			if (err)
				return res.status(500).send({ message: "Error al guardar." });
			if (!projectStored)
				return res
					.status(404)
					.send({ message: "No se ha podido guardar el proyecto." });

			return res.status(200).send({ project: projectStored });
		});

		return res.status(200).send({
			project: project,
			message: "Metodo SAVE",
		});
    },
    getProyect: function (req, res) {
        
    }
};

module.exports = controller;
