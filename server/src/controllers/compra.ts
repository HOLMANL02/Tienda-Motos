import { Request, Response } from "express";
import Compra from "../models/Compra.js";

// Obtener todas las compras
export const getCompras = async (req: Request, res: Response) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    console.error("❌ Error al obtener compras:", error);
    res.status(500).json({ message: "Error al obtener compras" });
  }
};

// Crear una nueva compra
export const createCompra = async (req: Request, res: Response) => {
  try {
    const nuevaCompra = await Compra.create(req.body);
    res.status(201).json(nuevaCompra);
  } catch (error) {
    console.error("❌ Error al crear compra:", error);
    res.status(500).json({ message: "Error al crear compra" });
  }
};
