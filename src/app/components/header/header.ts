import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-header',
  standalone: true, 
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  get totalItems() {
    return this.carritoService.totalItems();
  }

  constructor(private carritoService: CarritoService) {}
}
