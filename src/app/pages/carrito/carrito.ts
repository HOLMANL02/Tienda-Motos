import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  constructor(
    public carritoService: CarritoService,
    private router: Router
  ) {}

  // Volver a la tienda
  volverATienda() {
    this.router.navigate(['/products']);
  }

  // Eliminar producto
  remove(id: number) {
    this.carritoService.removeFromCart(id);
  }

  // Vaciar carrito
  clear() {
    this.carritoService.clearCart();
  }

  // Cambiar cantidad del producto
  cambiarCantidad(producto: any, cantidad: number) {
    const nuevaCantidad = (producto.cantidad || 1) + cantidad;

    if (nuevaCantidad <= 0) {
      this.remove(producto.id);
    } else {
      producto.cantidad = nuevaCantidad; // Actualiza directamente
    }
  }

  // Calcular total de productos
  totalItems(): number {
    return this.carritoService.items().reduce((acc, p) => acc + (p.cantidad || 1), 0);
  }

  // Calcular precio total
  totalPrice(): number {
    return this.carritoService.items().reduce((acc, p) => acc + (p.precio * (p.cantidad || 1)), 0);
  }
}
