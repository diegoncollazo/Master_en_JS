import { Component, OnInit, Input } from '@angular/core';
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

    constructor() {}

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
    }
}
