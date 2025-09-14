import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Header, Footer ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App{
  protected readonly title = signal('Tienda');
  }
