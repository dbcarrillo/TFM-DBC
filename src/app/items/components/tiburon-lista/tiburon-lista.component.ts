import { Component } from '@angular/core';
import { Tiburones } from '../../../models/tiburones';

@Component({
  selector: 'app-tiburon-lista',
  template: ` <app-tiburon-ficha
    [tiburones]="tiburones"
    *ngFor="let tiburones of tiburones"
  ></app-tiburon-ficha>`,
  styles: [],
})
export class TiburonListaComponent {
  public tiburones: Tiburones[];
  constructor() {}

  ngOnInit() {
    this.tiburones = [
      {
        name: 'Tiburón blanco',
        imageUrl: '../../../assets/imgs/blanco1.png',
        status: 2,
        link: 'Saber más',
      },
      {
        name: 'Tiburón mako',
        imageUrl: '../../../assets/imgs/mako1.png',
        status: 2,
        link: 'Saber más',
      },
      {
        name: 'Tiburón martillo',
        imageUrl: '../../../assets/imgs/martillo1.png',
        status: 3,
        link: 'Saber más',
      },
      {
        name: 'Tiburón tigre',
        imageUrl: '../../../assets/imgs/tigre1.png',
        status: 1,
        link: 'Saber más',
      },
      {
        name: 'Tiburón martillo',
        imageUrl: '.../../../assets/imgs/azul1.png',
        status: 1,
        link: 'Saber más',
      },
      {
        name: 'Tiburón oceánico',
        imageUrl: '../../../assets/imgs/oceanico1.png',
        status: 3,
        link: 'Saber más',
      },
    ];
  }
}
