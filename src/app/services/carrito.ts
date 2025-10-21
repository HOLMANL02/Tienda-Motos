import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private items: any[] = [];
  private totalItems = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItems.asObservable();

  constructor() {
    const savedCart = localStorage.getItem('carrito');
    if (savedCart) {
      this.items = JSON.parse(savedCart);
      this.totalItems.next(this.items.length);
    }
  }

  agregarProducto(producto: any) {
    this.items.push(producto);
    this.actualizarStorage();
  }

  eliminarProducto(index: number) {
    this.items.splice(index, 1);
    this.actualizarStorage();
  }

  obtenerProductos() {
    return this.items;
  }

  limpiarCarrito() {
    this.items = [];
    this.actualizarStorage();
  }

  private actualizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.items));
    this.totalItems.next(this.items.length);
  }
}
