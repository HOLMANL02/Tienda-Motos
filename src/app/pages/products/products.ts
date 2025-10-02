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
  textoBusqueda: string = ''; /** Texto escrito en el buscador para filtrar por nombre ('' = sin filtro) */
  paginaActual: number = 1;
  productosPorPagina: number = 22;
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
   * Filtra los productos combinando categoría y texto de búsqueda.
   *
   * Reglas:
   * - Si category === '' se aceptan todas las categorías.
   * - Si searchTerm está vacío se ignora el filtro por texto.
   * - La búsqueda por texto es case-insensitive y utiliza includes().
   */
filtrarProductos() {
  this.productosFiltrados = this.products.filter(p => {
    const coincideCategoria = this.category === '' || p.category === this.category;
    const coincideTexto = this.textoBusqueda === '' || p.name.toLowerCase().includes(this.textoBusqueda.toLowerCase());
    return coincideCategoria && coincideTexto;
  });
  this.paginaActual = 1; // Reinicia a la primera página
}


// Obtener productos de la página actual
  get productosPaginados(): Product[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    return this.productosFiltrados.slice(inicio, inicio + this.productosPorPagina);
  }

  cambiarPagina(nuevaPagina: number) {
    this.paginaActual = nuevaPagina;
  }

  get totalPaginas(): number {
    return Math.ceil(this.productosFiltrados.length / this.productosPorPagina);
  }
}


