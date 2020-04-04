"use strict";
$(document).ready(function() {
	//Load
	// $("#datos").load("https://reqres.in/");

	//Get
	$.get("https://reqres.in/api/users", { page: 2 }, function(response) {
		response.data.forEach((element, index) => {
			$("#datos").append(
				"<p>" + element.first_name + " " + element.last_name + "</p>"
			);
		});
	});
	//Post
	$("#formulario").submit(function(evento){
		evento.preventDefault(); //Cancelo accion por defecto del FORM

		var usuario = {
			name: $('input[name="nombre"]').val(),
			web: $('input[name="web"]').val()
		};
		// console.log(usuario);
		// $.post($(this).attr("action"), usuario, function(response){
		// 	console.log(response);
		// }).done(function(){
		// 	alert("Cargado correctamente");
		// });

		$.ajax({
			type: 'POST',
			// dataType: 'json',
			// contentType: 'application/json',
			url: $(this).attr('action'),
			data: usuario,
			beforeSend: function(){
				console.log("Enviando usuario.");
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("Ha ocurrido un error.");
			},
			timeout: 10
		})

		return false;
	});
});
