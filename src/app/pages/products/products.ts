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
export class ProductosComponent {
  products: Product[] = [];
  productosFiltrados: Product[] = [];
  category: string = '';
  textoBusqueda: string = '';
  paginaActual: number = 1;
  productosPorPagina: number = 15;
  sidebarVisible: boolean = false; // Control del sidebar en móvil

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.productosFiltrados = [...this.products];
  }

  /**
   * Filtra productos por categoría y texto de búsqueda
   */
  filtrarProductos() {
    this.productosFiltrados = this.products.filter(p => {
      const coincideCategoria = this.category === '' || p.category === this.category;
      const coincideTexto = this.textoBusqueda === '' || 
        p.name.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      return coincideCategoria && coincideTexto;
    });
    this.paginaActual = 1;
  }

  /**
   * Selecciona una categoría y filtra
   */
  seleccionarCategoria(categoria: string) {
    this.category = categoria;
    this.filtrarProductos();
    // Cerrar sidebar en móvil al seleccionar
    if (window.innerWidth <= 768) {
      this.sidebarVisible = false;
    }
  }

  /**
   * Limpia todos los filtros
   */
  limpiarFiltros() {
    this.category = '';
    this.textoBusqueda = '';
    this.filtrarProductos();
  }

  /**
   * Cuenta productos por categoría
   */
  contarPorCategoria(categoria: string): number {
    return this.products.filter(p => p.category === categoria).length;
  }

  /**
   * Toggle para mostrar/ocultar sidebar en móvil
   */
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  /**
   * Obtener productos paginados
   */
  get productosPaginados(): Product[] {
    const inicio = (this.paginaActual - 1) * this.productosPorPagina;
    return this.productosFiltrados.slice(inicio, inicio + this.productosPorPagina);
  }

  /**
   * Cambiar página
   */
  cambiarPagina(nuevaPagina: number) {
    this.paginaActual = nuevaPagina;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Total de páginas
   */
  get totalPaginas(): number {
    return Math.ceil(this.productosFiltrados.length / this.productosPorPagina);
  }
}