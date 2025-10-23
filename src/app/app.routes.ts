import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductosComponent } from './pages/products/products';
import { About } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
import { CarritoComponent } from './pages/carrito/carrito';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'products', component: ProductosComponent },
    { path: 'about', component: About },
    { path: 'contact', component: ContactComponent },
    { path: 'carrito', component: CarritoComponent },
    

    { path  : '**', redirectTo: '' }
];
