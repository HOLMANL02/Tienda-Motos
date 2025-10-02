import { Injectable } from '@angular/core';

/**
 * Representa un producto de la tienda.
 */
export interface Product {
  
  id: number; /** Identificador único del producto */
  name: string; /** Nombre del producto */
  description: string; /** Descripción breve del producto */
  price: number; /** Precio en pesos colombianos (COP) */
  image: string; /** Ruta de la imagen asociada al producto */
  category: string; /** Categoría del producto (ropa, accesorios, repuestos, electrónica) */
}

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio que gestiona los productos de la tienda.
 * 
 * Proporciona un listado estático de productos que puede ser usado en
 * componentes para mostrarlos, filtrarlos o listarlos por categoría.
 */
export class ProductService {
  /**
   * Lista estática de productos disponibles en la tienda.
   * 
   * Cada producto tiene su `id`, `name`, `description`, `price`, `image` y `category`.
   */
  private products: Product[] = [
    { id: 1, name: 'Cama Doble', description: 'Cama Doble 150*190 cm', price: 1700000, image: '/Imagenes/Cama1.jpg', category: 'Camas' },
    { id: 2, name: 'Cama SemiDoble', description: 'Cama SemiDoble 135*190cm', price: 1500000, image: '/Imagenes/Cama2.jpg', category: 'Camas' },
    { id: 3, name: 'Closet', description: 'Closet 160*58cm', price: 1300000, image: '/Imagenes/Closet1.png', category: 'Closet' },
    { id: 4, name: 'Closet', description: 'Closet 180*60cm', price: 90000, image: '/Imagenes/Closet2.png', category: 'Closet' },
    { id: 5, name: 'Sala', description: 'Sala Basic', price: 1200000, image: '/Imagenes/Sala1.png', category: 'Salas' },
    { id: 6, name: 'Sala', description: 'Sala + Mesita + 4 Puf', price: 2000000, image: '/Imagenes/Sala2.png', category: 'Salas' },
    { id: 7, name: 'Escritorio', description: 'Escritorio 120*60cm', price: 700000, image: '/Imagenes/Escritorio1.jpg', category: 'Escritorios' },
    { id: 8, name: 'Escritorio', description: 'Escritorio 140*70cm', price: 900000, image: '/Imagenes/Escritorio2.jpg', category: 'Escritorios' },
    { id: 9, name: 'Comedor', description: 'Comedor 4 Sillas', price: 800000, image: '/Imagenes/Comedor1.jpg', category: 'Comedores' },
    { id: 10, name: 'Comedor', description: 'Comedor 6 Sillas', price: 1200000, image: '/Imagenes/Comedor2.jpg', category: 'Comedores' },
    { id: 11, name: 'Silla de Oficina', description: 'Silla Ergonómica Negra', price: 300000, image: '/Imagenes/Silla1.jpg', category: 'Sillas' },
    { id: 12, name: 'Silla de Comedor', description: 'Silla de Madera y Tela', price: 150000, image: '/Imagenes/Silla2.jpg', category: 'Sillas' },
    { id: 13, name: 'Mesa de Centro', description: 'Mesa de Centro Moderna', price: 400000, image: '/Imagenes/Mesa1.jpg', category: 'Mesas' },
    { id: 14, name: 'Mesa Auxiliar', description: 'Mesa Auxiliar de Madera', price: 250000, image: '/Imagenes/Mesa2.jpg', category: 'Mesas' },
    { id: 15, name: 'Mueble de TV', description: 'Mueble de TV 120cm', price: 600000, image: '/Imagenes/MuebleTV1.jpg', category: 'Muebles de TV' },
    { id: 16, name: 'Mueble de TV', description: 'Mueble de TV 150cm', price: 800000, image: '/Imagenes/MuebleTV2.jpg', category: 'Muebles de TV' },
    { id: 17, name: 'Biblioteca', description: 'Biblioteca Alta 180cm', price: 700000, image: '/Imagenes/Biblioteca1.jpg', category: 'Bibliotecas' },
    { id: 18, name: 'Biblioteca', description: 'Biblioteca Baja 120cm', price: 500000, image: '/Imagenes/Biblioteca2.jpg', category: 'Bibliotecas' },
    { id: 19, name: 'Mueble de Exterior', description: 'Mueble de Exterior Rattan', price: 1500000, image: '/Imagenes/MuebleExterior1.jpg', category: 'Muebles de Exterior' },
    { id: 20, name: 'Mueble de Exterior', description: 'Mueble de Exterior Madera', price: 1300000, image: '/Imagenes/MuebleExterior2.jpg', category: 'Muebles de Exterior' },
    { id: 21, name: 'Cojín Decorativo', description: 'Cojín Decorativo Azul', price: 80000, image: '/Imagenes/Accesorio1.jpg', category: 'Accesorios' },
    { id: 22, name: 'Lámpara de Mesa', description: 'Lámpara de Mesa Moderna', price: 120000, image: '/Imagenes/Accesorio2.jpg', category: 'Accesorios' },



  ];

  /**
   * Constructor del servicio.
   * 
   * Actualmente no requiere inyección de dependencias,
   * pero se deja preparado para futuras ampliaciones.
   */
  constructor() {}

  /**
   * Retorna la lista de productos disponibles.
   * 
   * @returns Un arreglo de objetos `Product`
   */
  getProducts(): Product[] {
    return this.products;
  }
  
}
