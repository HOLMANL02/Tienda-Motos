"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Compra = connection_1.default.define('Compra', {
    id_pedido: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
    id_cliente: { type: sequelize_1.DataTypes.INTEGER },
    fecha_pedido: { type: sequelize_1.DataTypes.DATE },
    valor_total: { type: sequelize_1.DataTypes.DECIMAL(10, 2) },
    estado: { type: sequelize_1.DataTypes.STRING }
}, {
    tableName: 'pedidos',
    timestamps: false
});
exports.default = Compra;
//# sourceMappingURL=Compra.js.map