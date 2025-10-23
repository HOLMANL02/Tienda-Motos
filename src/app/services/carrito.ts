import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen?: string;
  cantidad?: number; // cantidad del producto en el carrito
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartItems = signal<Producto[]>([]);

  // Computed para total de productos (sumando cantidades)
  totalItems = computed(() =>
    this.cartItems().reduce((acc, p) => acc + (p.cantidad || 1), 0)
  );

  // Computed para total precio
  totalPrice = computed(() =>
    this.cartItems().reduce((acc, p) => acc + (p.precio * (p.cantidad || 1)), 0)
  );

  // Exponer items como readonly
  items = computed(() => this.cartItems());

  addToCart(producto: Producto, cantidad: number = 1) {
    const existing = this.cartItems().find(p => p.id === producto.id);
    if (existing) {
      // Si ya existe, actualizamos la cantidad
      this.cartItems.update(items =>
        items.map(p =>
          p.id === producto.id ? { ...p, cantidad: (p.cantidad || 1) + cantidad } : p
        )
      );
    } else {
      this.cartItems.update(items => [...items, { ...producto, cantidad }]);
    }
  }

  removeFromCart(id: number) {
    this.cartItems.update(items => items.filter(p => p.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
