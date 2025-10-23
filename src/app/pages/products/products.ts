import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/products';
import { CarritoService } from '../../services/carrito';

// Imports de Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

// Componente del dialog
import { ProductDetailDialogComponent } from '../../components/product-detail-dialog/product-detail-dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class ProductosComponent {
  products: Product[] = [];
  productosFiltrados: Product[] = [];
  category: string = '';
  textoBusqueda: string = '';
  paginaActual: number = 1;
  productosPorPagina: number = 15;
  sidebarVisible: boolean = false;

  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService
  ) {
    this.products = this.productService.getProducts();
    this.productosFiltrados = [...this.products];
  }

  /**
   * Abre el dialog con detalles del producto
   */
  verDetalle(producto: Product) {
    const dialogRef = this.dialog.open(ProductDetailDialogComponent, {
      data: producto,
      width: '800px',
      maxWidth: '95vw',
      panelClass: 'product-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'add-to-cart') {
        this.agregarAlCarrito(result.product);
      }
    });
  }

  /**
   * Agrega un producto al carrito con notificación Material
   */
  agregarAlCarrito(producto: Product) {
    this.carritoService.addToCart({
      id: producto.id,
      nombre: producto.name,
      precio: producto.price
    });
    
    // Notificación con MatSnackBar
    this.snackBar.open(`${producto.name} agregado al carrito ✓`, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
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