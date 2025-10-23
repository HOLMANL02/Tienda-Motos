import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarritoService, Producto } from '../../services/carrito';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carrito-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carrito-dialog.html',
  styleUrls: ['./carrito-dialog.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarritoDialogComponent {
  items = computed(() => this.carritoService.items());
  totalItems = computed(() => this.carritoService.totalItems());
  totalPrice = computed(() => this.carritoService.totalPrice());

  constructor(
    private dialogRef: MatDialogRef<CarritoDialogComponent>,
    private carritoService: CarritoService
  ) {}

  formatImagePath(path: string): string {
    return path.startsWith('/') ? path : `/${path}`;
  }

  cambiarCantidad(producto: Producto, cambio: number) {
    const nuevaCantidad = (producto.cantidad || 1) + cambio;
    if (nuevaCantidad <= 0) {
      this.eliminar(producto.id);
    } else {
      this.carritoService.addToCart(producto, cambio);
    }
  }

  eliminar(id: number) {
    this.carritoService.removeFromCart(id);
  }

  vaciarCarrito() {
    if (confirm('¿Deseas vaciar el carrito completo?')) {
      this.carritoService.clearCart();
    }
  }

  confirmarCompra() {
    alert('Compra realizada con éxito 🛍️💛');
    this.carritoService.clearCart();
    this.dialogRef.close();
  }

  cerrar() {
    this.dialogRef.close();
  }
}
