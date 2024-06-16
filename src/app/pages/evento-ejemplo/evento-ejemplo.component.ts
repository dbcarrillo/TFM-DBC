import { Component } from '@angular/core';

@Component({
  selector: 'app-evento-ejemplo',
  templateUrl: './evento-ejemplo.component.html',
  styleUrls: ['./evento-ejemplo.component.css'],
})
export class EventoEjemploComponent {
  Mostrar: boolean = true;
  ocultar: boolean = false;
  onclick() {
    this.Mostrar = !this.Mostrar;
    this.ocultar = !this.ocultar;
  }
}
