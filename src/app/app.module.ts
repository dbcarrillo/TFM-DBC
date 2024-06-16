import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ArticuloFichaComponent } from './items/components/articulo-ficha/articulo-ficha.component';
import { ArticuloListaComponent } from './items/components/articulo-lista/articulo-lista.component';
import { CarouselComponent } from './items/components/carousel/carousel.component';
import { DatosComponent } from './items/components/datos/datos.component';
import { FaqsComponent } from './items/components/faqs/faqs.component';
import { FooterComponent } from './items/components/footer/footer.component';
import { FormComponent } from './items/components/form/form.component';
import { MasInfoComponent } from './items/components/mas-info/mas-info.component';
import { NavbarComponent } from './items/components/navbar/navbar.component';
import { OpcionesContactoComponent } from './items/components/opciones-contacto/opciones-contacto.component';
import { TiburonFichaComponent } from './items/components/tiburon-ficha/tiburon-ficha.component';
import { TiburonListaComponent } from './items/components/tiburon-lista/tiburon-lista.component';
import { TomarAccionComponent } from './items/components/tomar-accion/tomar-accion.component';
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
import { EstadoTiburonnPipe } from './pipes/estado-tiburonn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TiburonpediaComponent,
    EventosComponent,
    ContactoComponent,
    BlogComponent,
    QuienesSomosComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    FormComponent,
    TomarAccionComponent,
    FaqsComponent,
    DatosComponent,
    TiburonFichaComponent,
    TiburonListaComponent,
    EstadoTiburonnPipe,
    CarouselComponent,
    ArticuloFichaComponent,
    ArticuloListaComponent,
    ArticuloEjemploComponent,
    EventoEjemploComponent,
    TiburonEjemploComponent,
    TerminosCookiesPrivacidadComponent,
    NotfoundComponent,
    MasInfoComponent,
    OpcionesContactoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
