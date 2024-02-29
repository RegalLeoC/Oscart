import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ProductosComponent } from './pages/productos/productos.component';

export const routes: Routes = [
    {
        path: '',
        component : InicioComponent
    },
    {
        path: 'detalles/:id',
        component : DetallesComponent
    },
    {
        path: 'productos',
        component : ProductosComponent
    },
    {
        path : 'contacto',
        component : ContactoComponent
    },
    {
        path : 'sobre-nosotros',
        component : SobreNosotrosComponent
    }
];
