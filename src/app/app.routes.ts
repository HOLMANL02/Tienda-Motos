import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductosComponent } from './pages/products/products';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'products', component: ProductosComponent },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    

    { path  : '**', redirectTo: '' }
];
