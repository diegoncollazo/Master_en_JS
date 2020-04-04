"use strict";
$(document).ready(function() {
    var boton = $("#boton");
    var animacion = $("#animacion");
	var caja = $("#caja");

	boton.click(function() {
		if (boton.text() == "Mostrar") {
			boton.text("Ocultar");
		} else {
			boton.text("Mostrar");
		}
		// caja.toggle('normal');
		// caja.fadeToggle('normal');
		caja.slideToggle("normal",function(){
            console.log("Animación finalizada.");//Cuando termina la animacion.
        });
    });

    animacion.click(function(){
        caja.animate(
            {
                marginLeft: '500px',
                fontSize: '40px',
                height: '110px'
            }, 'slow')
            .animate(
            {
                borderRadius: '900px',
                marginTop: '100px'
            }, 'slow')
            .animate(
                {
                    borderRadius: '0px',
                    marginLeft: '0px'
                }, 'slow')
            .animate(
                {
                    marginTop: '0px',
                    borderRadius: '100px'
                }, 'slow'
            );
    });

	/*
    $("#mostrar").click(function(){
        $(this).hide('fast');
        $("#ocultar").show('slow');
        // caja.show('slow');
        // caja.fadeIn('slow');
        // caja.slideUp('slow');
        caja.fadeTo('slow', 0.9);//Muestra [opacidad]
    });
    $("#ocultar").click(function(){
        $(this).hide('fast');
        $("#mostrar").show('slow');
        // caja.hide('slow');
        // caja.fadeOut('slow');
        // caja.slideDown('slow');
        caja.fadeTo('slow', 0.1); //Oculta [opacidad]
    });
    */
});
