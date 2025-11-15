import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from '../../services/carrito';
import { ComprasService } from '../../services/compra';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {

  mostrarFormulario = false;
  mostrarResumen = false;
  numeroFactura = 0;

  // ✔ Cliente completo
  cliente = {
    nombre: '',
    correo: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    region: '',
    metodo_pago: '',
    numeroCuenta: '',         // ✔ NECESARIO
    codigoVerificacion: '',
    numeroTarjeta: '',
    cvv: ''
  };

  constructor(
    public carritoService: CarritoService,
    private router: Router,
    private comprasService: ComprasService
  ) {}

  // Mostrar formulario si hay productos
confirmarCompra() {
  console.log("SI ENTRA AL MÉTODO");
  console.log("Items:", this.carritoService.items());

  if (this.carritoService.items().length === 0) {
    alert("El carrito está vacío. Agrega al menos 1 producto 💛");
    return;
  }

  this.mostrarFormulario = true;
}


  cerrarFormulario() {
    this.mostrarFormulario = false;
  }

  // Total
  totalPrice(): number {
    return this.carritoService.items().reduce(
      (acc, p) => acc + (p.precio * (p.cantidad || 1)),
      0
    );
  }

  // Validaciones
  validarFormulario(): boolean {
    if (!this.cliente.nombre ||
        !this.cliente.correo ||
        !this.cliente.telefono ||
        !this.cliente.direccion ||
        !this.cliente.ciudad ||
        !this.cliente.region ||
        !this.cliente.metodo_pago) {
      alert("Por favor completa todos los campos 💛");
      return false;
    }

    // Número de cuenta obligatorio excepto tarjeta
    if (this.cliente.metodo_pago !== "Tarjeta de crédito") {
      if (!this.cliente.numeroCuenta || this.cliente.numeroCuenta.length < 5) {
        alert("El número de cuenta debe tener mínimo 5 caracteres.");
        return false;
      }
    }

    // Nequi / Daviplata
    if (this.cliente.metodo_pago === "Nequi" || this.cliente.metodo_pago === "Daviplata") {
      if (!/^\d{5}$/.test(this.cliente.codigoVerificacion)) {
        alert("El código debe tener 5 dígitos.");
        return false;
      }
    }

    // Tarjeta
    if (this.cliente.metodo_pago === "Tarjeta de crédito") {
      if (!/^\d{16}$/.test(this.cliente.numeroTarjeta)) {
        alert("La tarjeta debe tener 16 dígitos.");
        return false;
      }
      if (!/^\d{3}$/.test(this.cliente.cvv)) {
        alert("El CVV debe tener 3 dígitos.");
        return false;
      }
    }

    return true;
  }

  // Pasa del formulario principal al resumen
  finalizarCompra() {
    if (!this.validarFormulario()) return;

    this.numeroFactura = Math.floor(Math.random() * 900000) + 100000;

    this.mostrarFormulario = false;
    this.mostrarResumen = true;
  }

  // Finalizar compra → Guardar en MySQL
  confirmarCompraFinal() {

    const data = {
      cliente: this.cliente,
      carrito: this.carritoService.items(),
      factura: {
        numero: this.numeroFactura,
        total: this.totalPrice()
      }
    };

    this.comprasService.guardarCompra(data).subscribe({
      next: (res) => {
        alert("Compra registrada con éxito 💛");

        this.carritoService.clearCart();
        this.mostrarResumen = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error(err);
        alert("❌ Error guardando la compra en la base de datos");
      }
    });
  }
}