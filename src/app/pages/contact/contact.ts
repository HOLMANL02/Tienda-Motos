import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [FormsModule, CommonModule],
  standalone: true,
  host: { 'ngSkipHydration': 'true' }
})
export class ContactComponent {
  
  // Modelo para enlazar los campos del formulario
  contactData = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    const formData = {
      ...this.contactData,
      timestamp: new Date().toISOString()
    };

    console.log('Formulario de contacto enviado:', formData);
    alert('¡Gracias por tu mensaje! La información se ha guardado correctamente.');

    // Resetear el formulario
    this.contactData = {
      name: '',
      email: '',
      company: '',
      message: ''
    };
  }
}