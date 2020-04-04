"use strict";
$(document).ready(function() {
	recargarEnlaces();

	var eBoton = $("#boton_enlaces");
    eBoton.removeAttr("disabled");
	eBoton.click(function() {
		let eNuevo = $("#nuevos_enlaces").val();
		let eMenu = $("#menu_enlaces");
		eMenu.append('<li><a href="' + eNuevo + '"></a></li>');
		eMenu.prepend('<li><a href="' + eNuevo + '"></a></li>');
		eMenu.after('<li><a href="' + eNuevo + '"></a></li>');
		eMenu.before('<li><a href="' + eNuevo + '"></a></li>');
		recargarEnlaces();
	});
	//console.log($('a').length);

	function recargarEnlaces() {
		$("a").each(function(index) {
			let that = $(this);
			let enlace = that.attr("href");
			that.text(enlace);
			that.attr("target", "_blank");
		});
	}
});
