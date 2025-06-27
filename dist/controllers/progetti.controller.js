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
exports.getProgettoById = exports.getProgetti = void 0;
const progetto_model_1 = require("../models/progetto.model");
const getProgetti = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const progetti = yield progetto_model_1.Progetto.find();
        res.json(progetti);
    }
    catch (error) {
        res.status(500).json({ message: 'Errore recupero progetti', error });
    }
});
exports.getProgetti = getProgetti;
const getProgettoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const progetto = yield progetto_model_1.Progetto.findById(req.params.id);
        if (!progetto) {
            res.status(404).json({ message: 'Progetto non trovato' });
            return;
        }
        res.json(progetto);
    }
    catch (error) {
        res.status(500).json({ message: 'Errore recupero progetto', error });
    }
});
exports.getProgettoById = getProgettoById;
