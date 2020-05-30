"use strict";
var Project = require("../models/project");
var fs = require("fs");

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
	// Crear un BSON y guardarlo
	saveProject: function (req, res) {
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
	// Obtener el BSON
	getProject: function (req, res) {
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
	// Obtener varios BSON
	getProjects: function (req, res) {
		// Project.find({year: 2020})
		// Project.find({+year})
		Project.find({}).exec((err, projects) => {
			if (err)
				return res
					.status(500)
					.send({ message: "Error al obtener los datos." });
			if (!project)
				return res
					.status(404)
					.send({ message: "No hay proyectos para mostrar." });
			return res.status(200).send({ projects });
		});
	},
	// Actualizar un BSON
	updateProject: function (req, res) {
		var projectID = req.params.id;
		var update = req.body;
		Project.findByIdAndUpdate(
			projectID,
			update,
			{ new: true },
			(err, projectUpdated) => {
				if (err)
					return res
						.status(500)
						.send({ message: "Error al actualizar." });
				if (!projectUpdated)
					return res.status(404).send({
						message: "No existe el proyecto para actualizar.",
					});
				return res.status(200).send({ project: projectUpdated });
			}
		);
	},
	// Borrar un BSON
	deleteProject: function (req, res) {
		var projectID = req.params.id;
		Project.findByIdAndRemove(projectID, (err, projectRemoved) => {
			if (err)
				return res
					.status(500)
					.send({ message: "No se ha podido borrar el proyecto." });
			if (!projectRemoved)
				return res
					.status(404)
					.send({ message: "No se puede eliminar ese proyecto" });

			return res.status(200).send({ project: projectRemoved });
		});
	},
	uploadImage: function (req, res) {
		var projectID = req.params.id;
		var fileName = "Imagen no cargada.";
		if (req.files) {
			var filePath = req.files.path;
			var fileSplit = filePath.split("/");
			var fileName = fileSplit[1];
			var extSplit = fileName.split(".");
			var fileExt = extSplit[1];

			if (
				fileExt == "png" ||
				fileExt == "jpg" ||
				fileExt == "jpeg" ||
				fileExt == "gif"
			) {
				Project.findByIdAndUpdate(
					projectID,
					{ image: fileName },
					{ new: true },
					(err, projectUpdated) => {
						if (err)
							return res.status(200).send({
								message: "La imagen no se ha cargado.",
							});
						if (!projectUpdated)
							return res.status(404).send({
								message:
									"El proyecto no existe y no se ha cargado la imagen.",
							});

						return res
							.status(200)
							.send({ project: projectUpdated });
					}
				);
			} else {
				fs.unlink(filePath, (err) => {
					return res
						.status(200)
						.send({ message: "La extension no es valida" });
				});
			}
		} else {
			return res.status(200).send({ message: fileName });
		}
	},
};

module.exports = controller;
