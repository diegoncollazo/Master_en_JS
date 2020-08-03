import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    public withSlider: number;
    public anchoToSlider: any;
    public captions: boolean;
    public autor: any;
    // Tomo la variable textos y la asigno a propiedad Textos
    @ViewChild('textos') textos: any;

    constructor() {
        this.captions = true;
    }

    ngOnInit(): void {
        // alert(document.querySelector("#texto").innerHTML);
        //console.log(this.textos);
    }

    cargarSlider() {
        this.anchoToSlider = this.withSlider;
    }
    reiniciarSlider() {
        this.anchoToSlider = false;
    }

    getAutor(event) {
        // console.log(event);
        this.autor = event;
    }
}
