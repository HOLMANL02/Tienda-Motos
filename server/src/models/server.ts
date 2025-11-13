import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "../db/connection.js";
import compraRoutes from "../routes/compra.js";

dotenv.config();

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/api/compras", compraRoutes);
  }

  async dbConnect() {
    try {
      await db.authenticate();
      console.log("✅ Base de datos conectada correctamente");
    } catch (error) {
      console.error("❌ Error en la conexión a la base de datos", error);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Servidor corriendo en puerto ${this.port}`);
    });
  }
}

export default Server;
