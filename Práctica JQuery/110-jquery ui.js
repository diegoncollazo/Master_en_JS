"use strict";
$(document).ready(function() {
	var elemento = $(".elemento");
	var lista = $(".lista");
	// Mover elemento en la pagina
	elemento.draggable();
	//Modificar el tamaño
	elemento.resizable();
	// Seleccionar en una lista

	// lista.selectable();

	// Ordenar [no se puede usar con .selectable()]
	lista.sortable({
		update: function(evento, ui) {
			console.log(evento);
			console.log(ui);
		}
	});
	// Tirar adentro de otro
	$("#movido").draggable();
	$("#area").droppable({
		drop: function() {
			console.log("Dentro del area.");
		}
	});
	// Efectos
	$("#mostrar").click(function() {
		// $(".caja-efectos").fadeToggle();
		// $(".caja-efectos").effect("explode");
		// $(".caja-efectos").toggle("explode");
		// $(".caja-efectos").toggle("blind");
		// $(".caja-efectos").toggle("slide");
		// $(".caja-efectos").toggle("drop");
		// $(".caja-efectos").toggle("fold");
		// $(".caja-efectos").toggle("puff");
		// $(".caja-efectos").toggle("scale");
		// $(".caja-efectos").toggle("shake");
		$(".caja-efectos").toggle("shake", "fast", 4000);
	});
	// Tooltips
	$(document).tooltip();

	// Dialog
	$("#dialogo").click(function() {
		$("#popup").dialog();
	});

	// Calendario
	$("#calendario").datepicker();

	// Tabs
	$("#pestanas").tabs();
});
