import { Router } from "express";
import { getCompras, createCompra } from "../controllers/compra.js";
const router = Router();
router.get("/", getCompras);
router.post("/", createCompra);
export default router;
//# sourceMappingURL=compra.js.map