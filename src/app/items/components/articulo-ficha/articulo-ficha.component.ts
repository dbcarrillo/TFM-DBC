import { Component, Input } from '@angular/core';
import { Articulos } from '../../../models/articulos';

@Component({
  selector: 'app-articulo-ficha',
  templateUrl: './articulo-ficha.component.html',
  styleUrls: ['./articulo-ficha.component.css'],
})
export class ArticuloFichaComponent {
  @Input() public articulos: Articulos;
  constructor() {}
}
