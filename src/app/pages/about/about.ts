import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe, UpperCasePipe } from '@angular/common';

// Importar el componente de diálogo
import { ValuesDialogComponent } from './values-dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
],
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  providers: [DatePipe, UpperCasePipe]
})
export class About {  // ← CAMBIADO de AboutComponent a About
  // Datos para pipes
  foundationDate = new Date(2010, 0, 15);
  companyName = 'Home By SamHol';
  
  // Datos para las tarjetas de valores
  values = [
    {
      icon: 'weekend',
      title: 'Calidad',
      description: 'Utilizamos materiales seleccionados y técnicas artesanales para garantizar la durabilidad y confort de cada mueble.',
      details: 'Todos nuestros productos cuentan con garantía de 5 años y certificación de calidad internacional. Trabajamos con maderas certificadas y materiales de primera línea.'
    },
    {
      icon: 'support_agent',
      title: 'Servicio',
      description: 'Brindamos asesoría personalizada y acompañamiento desde la elección del mueble hasta la entrega en tu hogar.',
      details: 'Servicio de instalación incluido, soporte post-venta 24/7 y asesoramiento de diseño interior sin costo adicional.'
    },
    {
      icon: 'eco',
      title: 'Sostenibilidad',
      description: 'Trabajamos con proveedores responsables y materiales ecológicos para cuidar el planeta mientras amueblamos hogares.',
      details: 'Más del 80% de nuestros materiales son reciclados o de fuentes sostenibles. Implementamos programas de reforestación y reducción de huella de carbono.'
    }
  ];

  features = [
    { icon: '🛋️', title: 'Variedad de Estilos', description: 'Desde lo moderno hasta lo clásico, tenemos opciones para todos los gustos y espacios.' },
    { icon: '🎨', title: 'Diseño Personalizado', description: 'Adaptamos cada pieza a tus necesidades de tamaño, color y funcionalidad.' },
    { icon: '💎', title: 'Calidad Garantizada', description: 'Trabajamos con materiales de primera y acabados premium para asegurar durabilidad y elegancia.' }
  ];

  constructor(
    private dialog: MatDialog,
    private datePipe: DatePipe,
    private upperCasePipe: UpperCasePipe
  ) {}

  // Método para abrir el diálogo de valores
  openValuesDialog(value: any): void {
    this.dialog.open(ValuesDialogComponent, {
      width: '500px',
      data: value,
      panelClass: 'custom-dialog-container'
    });
  }

  // Método que utiliza pipes programáticamente
  getFormattedDate(): string {
    return this.datePipe.transform(this.foundationDate, 'fullDate') || '';
  }

  getUpperCaseName(): string {
    return this.upperCasePipe.transform(this.companyName);
  }
}