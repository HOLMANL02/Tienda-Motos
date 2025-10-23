import { Injectable, signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen?: string;
  cantidad?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private cartItems = signal<Producto[]>([]);

  totalItems = computed(() => this.cartItems().length);
  
  totalPrice = computed(() =>
    this.cartItems().reduce((acc, p) => acc + p.precio, 0)
  );

  // Exponer items como readonly
  items = computed(() => this.cartItems());

  addToCart(producto: Producto) {
    this.cartItems.update(items => [...items, producto]);
  }

  removeFromCart(id: number) {
    this.cartItems.update(items => items.filter(p => p.id !== id));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}