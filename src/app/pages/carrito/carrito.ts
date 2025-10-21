import { signal, computed } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

export const cartItems = signal<Producto[]>([]);

export const totalItems = computed(() => cartItems().length);
export const totalPrice = computed(() => 
  cartItems().reduce((acc, p) => acc + p.precio, 0)
);

export function addToCart(producto: Producto) {
  cartItems.update(items => [...items, producto]);
}

export function removeFromCart(id: number) {
  cartItems.update(items => items.filter(p => p.id !== id));
}

export function clearCart() {
  cartItems.set([]);
}
