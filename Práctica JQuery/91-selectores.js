"use strict";
$(document).ready(function() {
	//Selector de ID
	$("#rojo")
		.css("background", "red")
		.css("color", "white");
	$("#amarillo").css("background", "yellow");
	$("#verde").css("background", "green");
	var vector = $(".zebra").css("padding", "5px");
	console.log(vector[0]);

	//Selector clases
	$(".yegua").click(function() {
		$(this).addClass("zebra");
	});

	//Selector etiquetas
	var parrafos = $("p");
	parrafos.css("cursor", "pointer");
	parrafos.click(function() {
		var that = $(this);
		if (!that.hasClass("grande")) {
			that.addClass("grande");
		} else {
			that.removeClass("grande");
		}
	});

	//Selector atributos
	$('[title="Google"]').css("background", "#ccc");
	$('[title="Infobae"]').css("background", "brown");

	//Otros
	$("p, a").addClass("margen-superior");

	//Saltar etiqueta a etiqueta
	var busqueda = $("#caja .resaltado")
		.eq(0)
		.parent()
		.parent()
		.parent()
		.find('[title="Google"]');
	console.log(busqueda);
});
