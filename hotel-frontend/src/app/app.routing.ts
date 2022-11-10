import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import {
    HeaderComponent,
    ListaHotelesComponent,
    ViewCalificacionComponent,
    ViewHotelComponent
} from './components';

const appRoutes: Routes = [
    { path: '', component: ListaHotelesComponent },
    { path: 'inicio', component: ListaHotelesComponent },
    { path: 'hotel/:id', component: ViewHotelComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
