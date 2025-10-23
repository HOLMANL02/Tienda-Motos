import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, HeaderComponent, Footer ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  protected readonly title = signal('Tienda');
  }
