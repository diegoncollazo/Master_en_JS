import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    public withSlider: number;
    public anchoToSlider: number;
    public captions: boolean;

    constructor() {
        this.captions = true;
    }

    ngOnInit(): void {}

    cargarSlider() {
        this.anchoToSlider = this.withSlider;
    }
    reiniciarSlider() {
        this.anchoToSlider = null;
    }
}
