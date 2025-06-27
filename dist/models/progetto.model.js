"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progetto = void 0;
// src/models/progetto.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const progettoSchema = new mongoose_1.default.Schema({
    titolo: { type: String, required: true },
    descrizione: String,
    tecnologie: [String],
    linkDemo: String,
    linkRepo: String,
    immagine: String,
    data: { type: Date, default: Date.now }
});
exports.Progetto = mongoose_1.default.model('Progetto', progettoSchema);
