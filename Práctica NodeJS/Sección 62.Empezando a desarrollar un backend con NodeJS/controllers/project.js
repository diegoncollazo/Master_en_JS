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
		var projectID = req.params.id;

		if (projectID == null)
			return res
				.status(404)
				.send({ message: "No envia ID de búsqueda." });

		Project.findById(projectID, (err, project) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al obtener los datos." });
			if (!project)
				return res
					.status(404)
					.send({ message: "El proyecto no existe." });
			return res.status(200).send({ project });
		});
	},
};

module.exports = controller;
