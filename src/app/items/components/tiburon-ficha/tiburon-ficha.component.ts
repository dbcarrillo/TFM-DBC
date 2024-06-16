import { Component, Input } from '@angular/core';
import { Tiburones } from '../../../models/tiburones';

@Component({
  selector: 'app-tiburon-ficha',
  templateUrl: './tiburon-ficha.component.html',
  styleUrls: ['./tiburon-ficha.component.css'],
})
export class TiburonFichaComponent {
  @Input() public tiburones: Tiburones;
  constructor() {}
}
