import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
/**
 * Componente encargado de mostrar la lista de productos.
 *
 * Permite filtrar productos por categoría mediante un select desplegable
 * y mostrar dinámicamente los resultados en la plantilla. */

export class ProductosComponent {   /** Lista completa de productos obtenidos del servicio */
  products: Product[] = []; /** Lista de productos filtrados según la categoría seleccionada */
  productosFiltrados: Product[] = [];
  category: string = ''; /** Categoría seleccionada en el select (por defecto vacía = todas las categorías) */

  /**
   * Constructor del componente.
   * 
   * Se inyecta el `ProductService` para obtener los productos
   * y se inicializa la lista `productosFiltrados` con todos los productos.
   *
   * @param productService Servicio que proporciona los productos disponibles
   */
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.productosFiltrados = [...this.products]; // Mostrar todos al inicio
  }

  /**
   * Filtra los productos en función de la categoría seleccionada.
   * 
   * Si no hay categoría seleccionada (`category === ''`), se muestran todos los productos.
   * Si hay categoría seleccionada, solo se muestran los que coincidan con ella.
   *
   * @returns void
   */
  filtrarProductos(): void {
    if (this.category === '') {
      // Mostrar todos los productos si no hay categoría seleccionada
      this.productosFiltrados = [...this.products];
    } else {
      // Filtrar productos por categoría
      this.productosFiltrados = this.products.filter(
        p => p.category === this.category
      );
    }
  }
}
