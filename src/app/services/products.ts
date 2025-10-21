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
    { id: 12, name: 'Silla de Comedor', description: 'Silla de Madera y Tela', price: 130000, image: '/Imagenes/Silla2.jpg', category: 'Sillas' },
    { id: 13, name: 'Mesa de Centro', description: 'Mesa de Centro Moderna', price: 400000, image: '/Imagenes/Mesa1.jpg', category: 'Mesas' },
    { id: 14, name: 'Mesa Auxiliar', description: 'Mesa Auxiliar de Madera', price: 250000, image: '/Imagenes/Mesa2.jpg', category: 'Mesas' },
    { id: 15, name: 'Mueble de TV', description: 'Mueble de TV 120cm', price: 600000, image: '/Imagenes/MuebleTV1.jpg', category: 'Muebles de TV' },
    { id: 16, name: 'Mueble de TV', description: 'Mueble de TV 150cm', price: 1200000, image: '/Imagenes/MuebleTV2.jpg', category: 'Muebles de TV' },
    { id: 17, name: 'Biblioteca', description: 'Biblioteca Alta 180cm', price: 700000, image: '/Imagenes/Biblioteca1.jpg', category: 'Bibliotecas' },
    { id: 18, name: 'Biblioteca', description: 'Biblioteca Baja 120cm', price: 900000, image: '/Imagenes/Biblioteca2.jpg', category: 'Bibliotecas' },
    { id: 19, name: 'Mueble de Exterior', description: 'Mueble de Exterior Rattan', price: 1300000, image: '/Imagenes/MuebleExterior1.jpg', category: 'Muebles de Exterior' },
    { id: 20, name: 'Mueble de Exterior', description: 'Mueble de Exterior Madera', price: 2300000, image: '/Imagenes/MuebleExterior2.jpg', category: 'Muebles de Exterior' },
    { id: 21, name: 'Cojín Decorativo', description: 'Cojín Decorativo Azul', price: 80000, image: '/Imagenes/Accesorio1.jpg', category: 'Accesorios' },
    { id: 22, name: 'Lámpara de Mesa', description: 'Lámpara de Mesa Moderna', price: 120000, image: '/Imagenes/Accesorio2.jpg', category: 'Accesorios' },
    { id: 23, name: 'Reloj de Pared', description: 'Reloj de Pared Vintage', price: 90000, image: '/Imagenes/Accesorio3.jpg', category: 'Accesorios' },
    { id: 24, name: 'Alfombra', description: 'Alfombra Persa 200x300cm', price: 400000, image: '/Imagenes/Accesorio4.jpg', category: 'Accesorios' },
    { id: 25, name: 'mesa de noche', description: 'Mesa de Noche con Cajones', price: 350000, image: '/Imagenes/MesaNoche1.jpg', category: 'Mesas de Noche' },
    { id: 26, name: 'mesa de noche', description: 'Mesa de Noche Minimalista', price: 250000, image: '/Imagenes/MesaNoche2.jpg', category: 'Mesas de Noche' },
    { id: 27, name: 'Sofá Cama', description: 'Sofá Cama 3 Plazas', price: 1800000, image: '/Imagenes/SofaCama1.jpg', category: 'Sofás Cama' },
    { id: 28, name: 'Sofá Cama', description: 'Sofá Cama 2 Plazas', price: 1500000, image: '/Imagenes/SofaCama2.jpg', category: 'Sofás Cama' },
    { id: 29, name: 'Taburete', description: 'Taburete Alto de Bar', price: 120000, image: '/Imagenes/Taburete1.jpg', category: 'Taburetes' },
    { id: 30, name: 'Taburete', description: 'Taburete Bajo de Madera', price: 100000, image: '/Imagenes/Taburete2.jpg', category: 'Taburetes' },
    { id: 31, name: 'lampara de pie', description: 'Lámpara de Pie Moderna', price: 220000, image: '/Imagenes/LamparaPie1.jpg', category: 'Lámparas de Pie' },
    { id: 32, name: 'lampara de pie', description: 'Lámpara de Pie Clásica', price: 180000, image: '/Imagenes/LamparaPie2.jpg', category: 'Lámparas de Pie' },
    { id: 33, name: 'Perchero', description: 'Perchero de Pie de Madera', price: 150000, image: '/Imagenes/Perchero1.jpg', category: 'Percheros' },
    { id: 34, name: 'Perchero', description: 'Perchero de Pared Metálico', price: 80000, image: '/Imagenes/Perchero2.jpg', category: 'Percheros' },
    { id: 35, name: 'espejo de pared', description: 'Espejo de Pared Redondo', price: 130000, image: '/Imagenes/Espejo1.jpg', category: 'Espejos' },
    { id: 36, name: 'espejo de pared', description: 'Espejo de Pared Cuadrado', price: 110000, image: '/Imagenes/Espejo2.jpg', category: 'Espejos' },
    { id: 37, name:'colchón', description: 'Colchón Espuma 140x190cm', price: 600000, image: '/Imagenes/Colchon1.jpg', category: 'Colchones' },
    { id: 38, name:'colchón', description: 'Colchón Resortes 150x200cm', price: 900000, image: '/Imagenes/Colchon2.jpg', category: 'Colchones' },





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
