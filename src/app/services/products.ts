import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number; 
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Botas de Seguridad', description: 'Botas motos.', price: 700000, image: '/Imagenes/Botas.png' },
    { id: 2, name: 'Defensas', description: 'Defensas para moto.', price: 150000, image: '/Imagenes/defensas.jfif' },
    { id: 3, name: 'Cascos de Seguridad', description: 'Cascos MT.', price: 800000, image: '/Imagenes/Casco.jpg' },
    { id: 4, name: 'Guantes Moto', description: 'Guantes resistentes.', price: 90000, image: '/Imagenes/Guantes.png' },
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}