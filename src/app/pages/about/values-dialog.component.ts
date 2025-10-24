import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatDialogRef, 
  MAT_DIALOG_DATA, 
  MatDialogModule 
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

// Interfaz para definir la estructura de datos del diálogo
export interface ValueData {
  icon: string;
  title: string;
  description: string;
  details: string;
}

@Component({
  selector: 'app-values-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  template: `
    <div class="dialog-container">
      <h2 mat-dialog-title class="dialog-title">
        <mat-icon class="title-icon">{{ data.icon }}</mat-icon>
        {{ data.title }}
      </h2>
      
      <mat-dialog-content class="dialog-content">
        <mat-card class="value-card-dialog">
          <mat-card-content>
            <p class="description">{{ data.description }}</p>
            <div class="details-section">
              <h3 class="details-title">Más información:</h3>
              <p class="details-text">{{ data.details }}</p>
            </div>
          </mat-card-content>
        </mat-card>
      </mat-dialog-content>
      
      <mat-dialog-actions align="end" class="dialog-actions">
        <button mat-raised-button color="primary" (click)="onClose()">
          <mat-icon>close</mat-icon>
          Cerrar
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .dialog-container {
      padding: 0;
      background: #1c1c1c;
      color: white;
      border-radius: 8px;
      overflow: hidden;
    }

    .dialog-title {
      background: linear-gradient(135deg, #ffd740 0%, #ffab00 100%);
      color: #1c1c1c;
      margin: 0;
      padding: 20px 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
    }

    .title-icon {
      color: #1c1c1c;
    }

    .dialog-content {
      padding: 24px;
      margin: 0;
    }

    .value-card-dialog {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 215, 64, 0.2);
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    }

    .description {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
      color: #eaeaea;
    }

    .details-section {
      background: rgba(255, 215, 64, 0.1);
      padding: 15px;
      border-radius: 6px;
      border-left: 4px solid #ffd740;
    }

    .details-title {
      color: #ffd740;
      margin: 0 0 10px 0;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .details-text {
      color: #eaeaea;
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
    }

    .dialog-actions {
      padding: 16px 24px;
      background: rgba(0, 0, 0, 0.2);
      margin: 0;
    }
  `]
})
export class ValuesDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ValuesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ValueData
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}