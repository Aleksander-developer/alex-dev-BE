"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servizio = void 0;
// src/models/servizio.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const servizioSchema = new mongoose_1.default.Schema({
    titolo: { type: String, required: true },
    descrizione: String,
    icona: String
});
exports.Servizio = mongoose_1.default.model('Servizio', servizioSchema);
