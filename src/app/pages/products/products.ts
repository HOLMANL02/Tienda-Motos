import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor
import { ProductService, Product } from '../../services/products';


@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
  imports: [CommonModule] // Esto habilita *ngFor
})
export class ProductosComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}