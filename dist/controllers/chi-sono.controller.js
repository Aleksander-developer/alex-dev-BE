"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfilo = void 0;
const chi_sono_model_1 = require("../models/chi-sono.model");
const getProfilo = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contenuto = yield chi_sono_model_1.ChiSono.findOne();
        res.json(contenuto);
    }
    catch (error) {
        res.status(500).json({ message: 'Errore caricamento profilo', error });
    }
});
exports.getProfilo = getProfilo;
