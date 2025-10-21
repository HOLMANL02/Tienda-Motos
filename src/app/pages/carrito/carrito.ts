import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  constructor(public carritoService: CarritoService) {}

  remove(id: number) {
    this.carritoService.removeFromCart(id);
  }

  clear() {
    this.carritoService.clearCart();
  }
}