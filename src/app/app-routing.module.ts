import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloEjemploComponent } from './pages/articulo-ejemplo/articulo-ejemplo.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EventoEjemploComponent } from './pages/evento-ejemplo/evento-ejemplo.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { TerminosCookiesPrivacidadComponent } from './pages/terminos-cookies-privacidad/terminos-cookies-privacidad.component';
import { TiburonEjemploComponent } from './pages/tiburon-ejemplo/tiburon-ejemplo.component';
import { TiburonpediaComponent } from './pages/tiburonpedia/tiburonpedia.component';

// Rutas navegación
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'tiburonpedia', component: TiburonpediaComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'articulo-ejemplo', component: ArticuloEjemploComponent },
  { path: 'evento-ejemplo', component: EventoEjemploComponent },
  { path: 'tiburon-ejemplo', component: TiburonEjemploComponent },
  {
    path: 'terminos-cookies-privacidad',
    component: TerminosCookiesPrivacidadComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
