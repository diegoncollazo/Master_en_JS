"use strict";
var mongoose = require("mongoose");
var app = require("./app.js");
var port = 3700;

mongoose.Promise = global.Promise;
mongoose
    .connect("mongodb://localhost:27017/portafolio", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("Conexión a la base de datos establecida.");
        // Creacion del servidor
        app.listen(port, () => {
            console.log(
                "Servidor corriendo correctamente en url: localhost:3700"
            );
        });
    })
    .catch((err) => console.log(err));
