"use strict";

var controller = {
	home: function (req, res) {
		return res.status(200).send({
			message: "Soy la home"
		});
	},
	test: function (req, res) {
		return res.status(200).send({
			message: "Soy el metodo test del controlador project"
		});
	}
};
module.exports = controller;
