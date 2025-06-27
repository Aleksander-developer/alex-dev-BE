"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contatto = void 0;
// src/models/contatto.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const contattoSchema = new mongoose_1.default.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    messaggio: { type: String, required: true },
    cellulare: String,
    data: { type: Date, default: Date.now }
});
exports.Contatto = mongoose_1.default.model('Contatto', contattoSchema);
