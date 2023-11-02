import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: any;
  @Input() image: any;
  @Input() title: any;
  @Input() desc: any;
  @Input() date: any;
}
