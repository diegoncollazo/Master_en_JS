"use strict";
$(document).ready(function() {
	//MouseOver & MouseOut
	var caja = $("#caja");
	// caja.mouseover(function(){
	//     $(this).css("background", "red");
	// });
	// caja.mouseout(function(){
	//     $(this).css("background", "blue");
	// });
	function rojo() {
		$(this).css("background", "red");
	}
	function verde() {
		$(this).css("background", "green");
	}

	//Hover
	caja.hover(rojo, verde);

	//Click
	caja.click(function() {
		$(this)
			.css("background", "blue")
			.css("color", "white");
	});

	//DoubleClick
	caja.dblclick(function() {
		$(this)
			.css("background", "brown")
			.css("color", "yellow");
	});

	//Blur & Focus
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function() {
		$(this).css("border", "2px solid green");
	});

	nombre.blur(function() {
		$(this).css("border", "1px solid #ccc");

		datos.text($(this).val()).show();
	});

	//Mousemove
	$(document).mousemove(function() {
		$('body').css("cursor","none");
		$("#sigueme").css("left", event.clientX).css("top", event.clientY);
	});
});
