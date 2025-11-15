const express = require("express");
const mysql = require("mysql2");   // <-- mysql2 para MySQL 8
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 CONEXIÓN A MYSQL
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "12345",
  database: "tienda_motos"
});

// PROBAR CONEXIÓN
db.connect(err => {
  if (err) {
    console.log("Error conectando a MySQL:", err);
    return;
  }
  console.log("Conectado a MySQL en puerto 3307");
});

// GUARDAR CLIENTE + FACTURA + PRODUCTOS
app.post("/api/guardar-compra", (req, res) => {

  const cliente = req.body.cliente;
  const carrito = req.body.carrito;
  const factura = req.body.factura;

  // Guardar cliente
  const sqlCliente = `
    INSERT INTO clientes (nombre, correo, telefono, direccion, ciudad, region, metodo_pago, numeroCuenta)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sqlCliente,
    [
      cliente.nombre,
      cliente.correo,
      cliente.telefono,
      cliente.direccion,
      cliente.ciudad,
      cliente.region,
      cliente.metodo_pago,
      cliente.numeroCuenta
    ],
    (err, result) => {
      if (err) {
        console.log("Error guardando cliente:", err);
        return res.status(500).json({ ok: false, error: err });
      }

      const clienteId = result.insertId;

      //  Guardar factura
      const sqlFactura = `
        INSERT INTO facturas (id_cliente, numero, total)
        VALUES (?, ?, ?)
      `;

      db.query(
        sqlFactura,
        [clienteId, factura.numero, factura.total],
        (err, resultFactura) => {
          if (err) {
            console.log(" Error guardando factura:", err);
            return res.status(500).json({ ok: false, error: err });
          }

          const facturaId = resultFactura.insertId;

          //  Guardar los productos de la factura
          const sqlItems = `
            INSERT INTO factura_items (id_factura, nombre, precio, cantidad)
            VALUES ?
          `;

          const items = carrito.map(p => [
            facturaId,
            p.nombre,
            p.precio,
            p.cantidad ? p.cantidad : 1
          ]);

          db.query(sqlItems, [items], (err) => {
            if (err) {
              console.log(" Error guardando items:", err);
              return res.status(500).json({ ok: false, error: err });
            }

            return res.json({ ok: true, mensaje: "Compra guardada con éxito" });
          });
        }
      );
    }
  );
});

//  SERVIDOR
app.listen(3000, () => {
  console.log(" Servidor API listo en http://localhost:3000");
});
