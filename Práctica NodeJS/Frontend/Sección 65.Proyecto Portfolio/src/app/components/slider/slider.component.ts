import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// JQuery GENERAL
// import * as $ from 'jquery';
// JQUERY local
declare var $: any;

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
    // Cargo decorador Input.
    @Input() ancho: number;
    // Cambio nombre que recibo de componente padre.
    @Input('etiquetas') captions: boolean;

    @Output() getAutor = new EventEmitter();

    public autor: any;

    constructor() {
        this.autor = {
            nombre: 'Diego Collazo',
            website: 'www.google.com.ar',
            youtube: 'Diego Collazo DEV',
        };
    }

    ngOnInit(): void {
        $('#logo').click(function (e) {
            e.preventDefault();
            $('header').css('background', 'red').css('height', '50px');
        });

        let elem: any;
        elem = $('.bxslider');
        elem.bxSlider({
            mode: 'fade',
            captions: this.captions,
            // Utilizo el ancho del formulario Contact.
            slideWidth: this.ancho,
        });
        // Lanzo el evento directo
        this.getAutor.emit(this.autor);
    }
    // Evento
    lanzar(event) {
        // console.log(event);
        this.getAutor.emit(this.autor);
    }
}
