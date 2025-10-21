import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../services/products';

@Component({
  selector: 'app-product-detail-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './product-detail-dialog.html',
  styleUrls: ['./product-detail-dialog.css']
})
export class ProductDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  close(): void {
    this.dialogRef.close();
  }

  addToCart(): void {
    this.dialogRef.close({ action: 'add-to-cart', product: this.data });
  }
}
