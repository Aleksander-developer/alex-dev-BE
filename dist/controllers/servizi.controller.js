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
exports.getServizi = void 0;
const servizio_model_1 = require("../models/servizio.model");
const getServizi = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const servizi = yield servizio_model_1.Servizio.find();
        res.json(servizi);
    }
    catch (error) {
        res.status(500).json({ message: 'Errore recupero servizi', error });
    }
});
exports.getServizi = getServizi;
