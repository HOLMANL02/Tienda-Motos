CREATE DATABASE tienda_motos;
USE tienda_motos;

CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100),
  telefono VARCHAR(30),
  direccion VARCHAR(150),
  ciudad VARCHAR(50),
  region VARCHAR(50),
  metodo_pago VARCHAR(30),
  numeroCuenta VARCHAR(50)
);

SELECT * FROM clientes;
SELECT * FROM facturas;
SELECT * FROM factura_items;




CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  categoria VARCHAR(50),
  precio DECIMAL(10,2),
  imagen VARCHAR(255)
);

CREATE TABLE facturas (
  id_factura INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT,
  numero INT,
  total INT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

CREATE TABLE factura_items (
  id_item INT AUTO_INCREMENT PRIMARY KEY,
  id_factura INT,
  nombre VARCHAR(100),
  precio INT,
  cantidad INT,
  FOREIGN KEY (id_factura) REFERENCES facturas(id_factura)
);
