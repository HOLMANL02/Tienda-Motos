import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

// 🧩 Recrear __dirname para módulos ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔧 Cargar variables desde .env
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

console.log("🧩 Variables de entorno cargadas:");
console.log({
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: process.env.DB_PORT
});

const db = new Sequelize(
  process.env.DB_NAME || "tienda_motos",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "Cielo",
  {
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3307,
    dialect: "mysql",
    logging: false
  }
);

export default db;
