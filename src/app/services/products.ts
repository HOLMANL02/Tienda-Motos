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
    { id: 1, name: 'Botas AP', description: 'Botas motos.', price: 700000, image: '/Imagenes/Botas.jpg', category: 'ropa' },
    { id: 2, name: 'Defensas', description: 'Defensas para moto.', price: 150000, image: '/Imagenes/defensas.jpg', category: 'accesorios' },
    { id: 3, name: 'Cascos de Seguridad', description: 'Cascos MT.', price: 800000, image: '/Imagenes/Casco.jpg', category: 'ropa' },
    { id: 4, name: 'Guantes Moto', description: 'Guantes resistentes.', price: 90000, image: '/Imagenes/Guantes.png', category: 'ropa' },
    { id: 5, name: 'Baul Moto', description: 'Baul 47 ltrs.', price: 120000, image: '/Imagenes/baul.jpg', category: 'accesorios' },
    { id: 6, name: 'Intercom', description: 'Intercom 300M.', price: 110000, image: '/Imagenes/intercomunicador.png', category: 'electronica' },
    { id: 7, name: 'Rodilleras', description: 'Rodilleras Moto.', price: 130000, image: '/Imagenes/Rodilleras.jpg', category: 'ropa' },
    { id: 8, name: 'Direccionales', description: 'Direcionales Del.', price: 40000, image: '/Imagenes/Direccionales.png', category: 'repuestos' },
    { id: 9, name: 'Kit de Arraste', description: 'Cadena mas Piñones.', price: 250000, image: '/Imagenes/kit_cadena.jpg', category: 'repuestos' },
    { id: 10, name: 'Candado de Seguridad', description: 'Candado resistente.', price: 60000, image: '/Imagenes/candado.png', category: 'accesorios' },
    { id: 11, name: 'Espejo Rizoma', description: 'Espejo tipo Aleron.', price: 50000, image: '/Imagenes/espejos.jpg', category: 'accesorios' },
    { id: 12, name: 'Guaya Acelerador', description: 'Guaya Moto Acelerador.', price: 75000, image: '/Imagenes/GUAYAS.jpg', category: 'repuestos' },
    { id: 13, name: 'Llanta Trasera', description: 'Dumlop 601 140-70-17.', price: 320000, image: '/Imagenes/llanta.jpg', category: 'repuestos' },
    { id: 14, name: 'Tacometro para Moto', description: 'Tacometro Gen GN125.', price: 95000, image: '/Imagenes/tacometro.jpg', category: 'electronica' },
    { id: 15, name: 'Tula casgo', description: 'protector casco AGV.', price: 45000, image: '/Imagenes/tula_casco.png', category: 'ropa' },
    { id: 16, name: 'Posapies', description: 'Posapies trasero Moto Gen.', price: 130000, image: '/Imagenes/posapies.jpg', category: 'repuestos' },
    { id: 17, name: 'Protector Tanque', description: 'Protector siliconado FZ-150', price: 30000, image: '/Imagenes/protector_tanque.png', category: 'accesorios' },
    { id: 18, name: 'Pastillas Freno', description: 'REVVO Ns200', price: 60000, image: '/Imagenes/pastillas.jpg', category: 'repuestos' }
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
