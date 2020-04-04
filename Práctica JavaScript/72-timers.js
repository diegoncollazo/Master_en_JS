'use strict'
function intervalo(){
    // var tiempo= this.setTimeout(function(){
        var tiempo = setInterval(function(){
        console.log("Intervalo de 3 seg.");
        var tamaño = document.querySelector("h1");
        if (tamaño.style.fontSize  == "50px"){
            tamaño.style.fontSize = "20px" ;
        }else{
            tamaño.style.fontSize = "50px" ;
        }
    }, 1000);
    return tiempo;
}

window.addEventListener('load', function(){
    var retorno = intervalo();
    //Paro el evento.
    var parar = document.querySelector("#parar");
    parar.addEventListener('click', function(){
        clearInterval(retorno);
        console.log("Intervalo parado.");
    });
    //Arranco el evento.
    var arrancar = document.querySelector("#arrancar");
    arrancar.addEventListener('click', function(){
        retorno = intervalo();
        console.log("Intervalo arrancado.");
    });
});