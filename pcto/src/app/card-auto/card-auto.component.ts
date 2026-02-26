import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-card-auto',
  templateUrl: './card-auto.component.html',
  styleUrls: ['./card-auto.component.scss'],
})



export class CardAutoComponent{
    @Input() titolo!: string;
    @Input() desc!: string;
    @Input() sottodesc!: string;
    @Input() img!: string;
    @Input() label!: string;
}

