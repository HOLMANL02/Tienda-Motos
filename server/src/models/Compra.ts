import { DataTypes } from "sequelize";
import db from "../db/connection.js"; // 👈 conexión, no Server

const Compra = db.define("Compra", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  producto: {
    type: DataTypes.STRING
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2)
  },
  cantidad: {
    type: DataTypes.INTEGER
  }
});

export default Compra;
