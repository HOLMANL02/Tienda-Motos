import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/products';

@Component({
  selector: 'app-product-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="dialog-container">
      <h2>{{ data.name }}</h2>
      <img [src]="data.image" alt="{{ data.name }}" class="product-image">
      <p class="description">{{ data.description }}</p>
      <h3 class="price">{{ data.price | currency:'COP':'symbol':'1.0-0' }}</h3>

      <div class="actions">
        <button mat-raised-button color="primary" (click)="agregarAlCarrito()">
          <mat-icon>add_shopping_cart</mat-icon>
          Agregar al carrito
        </button>
        <button mat-stroked-button color="warn" (click)="cerrar()">
          Cerrar
        </button>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      text-align: center;
      padding: 20px;
    }
    .product-image {
      width: 60%;
      border-radius: 10px;
      margin: 10px auto;
      display: block;
    }
    .price {
      color: #1976d2;
      font-weight: bold;
      margin-top: 10px;
    }
    .actions {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 15px;
    }
  `]
})
export class ProductDetailDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  agregarAlCarrito() {
    // Al presionar el botón, se cierra el diálogo y se devuelve el producto
    this.dialogRef.close({ action: 'add-to-cart', product: this.data });
  }

  cerrar() {
    this.dialogRef.close();
  }
}
