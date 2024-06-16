import { Component } from '@angular/core';
import { Articulos } from '../../../models/articulos';
@Component({
  selector: 'app-articulo-lista',
  template: ` <app-articulo-ficha
    [articulos]="articulos"
    *ngFor="let articulos of articulos"
  ></app-articulo-ficha>`,
  styles: [],
})
export class ArticuloListaComponent {
  public articulos: Articulos[];
  constructor() {}

  ngOnInit() {
    this.articulos = [
      {
        name: 'Los tiburones más curiosos del mundo',
        imageUrl: '../../../assets/imgs/articulo1.png',
        subtitulo: 'No creerás que son reales',
        link: 'Leer artículo',
      },
      {
        name: 'Los tiburones más grandes de la historia',
        imageUrl: '../../../assets/imgs/articulo2.png',
        subtitulo: 'De la leyenda a la realidad',
        link: 'Leer artículo',
      },
      {
        name: 'Preservación de playas y ecosistema marino',
        imageUrl: '../../../assets/imgs/articulo3.png',
        subtitulo: 'Acciones que marcan la diferencia',
        link: 'Leer artículo',
      },
      {
        name: 'Bucear entre tiburones cada vez es más común',
        imageUrl: '../../../assets/imgs/articulo4.png',
        subtitulo: 'Una experiencia llena de adrenalina',
        link: 'Leer artículo',
      },
      {
        name: '¿Conoces peculiar e interesante este tiburón?',
        imageUrl: '.../../../assets/imgs/azul1.png',
        subtitulo: 'El gran desconocido de la especie',
        link: 'Leer artículo',
      },
      {
        name: '¿El alimento preferido de los tiburones?',
        imageUrl: '../../../assets/imgs/articulo6.png',
        subtitulo: 'La foca es una presa muy codiciada',
        link: 'Leer artículo',
      },
    ];
  }
}
