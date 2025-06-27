"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChiSono = void 0;
// src/models/chisono.model.ts
const mongoose_1 = __importDefault(require("mongoose"));
const chiSonoSchema = new mongoose_1.default.Schema({
    contenuto: { type: String, required: true },
    aggiornata: { type: Date, default: Date.now }
});
exports.ChiSono = mongoose_1.default.model('ChiSono', chiSonoSchema);
