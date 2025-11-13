"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompras = void 0;
const express_1 = require("express");
const Compra_1 = __importDefault(require("../models/Compra"));
const getCompras = async (req, res) => {
    const compras = await Compra_1.default.findAll();
    res.json(compras);
};
exports.getCompras = getCompras;
//# sourceMappingURL=compra.js.map