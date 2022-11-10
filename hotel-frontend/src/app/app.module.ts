import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListaHotelesComponent } from './components/lista-hoteles/lista-hoteles.component';
import { ViewHotelComponent } from './components/view-hotel/view-hotel.component';
import { ViewCalificacionComponent } from './components/view-calificacion/view-calificacion.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaHotelesComponent,
    ViewHotelComponent,
    ViewCalificacionComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
