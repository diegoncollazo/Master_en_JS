"use strict";
// Modulos en variables
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
// Cargar archivos de rutas

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS

// Rutas
app.get("/", (req, res) => {
	res.status(200).send("<h1>Pagina principal</h1>");
});

app.post("/test/:id", (req, res) => {
	console.log(req.body.name);
	console.log(req.query.web);
	console.log(req.params.id);
	res.status(200).send({
		message: "Hola desde API NodeJS",
	});
});

// Exportar
module.exports = app;
