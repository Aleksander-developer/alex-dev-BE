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
exports.subscribe = void 0;
const newsletter_model_1 = require("../models/newsletter.model");
const email_1 = require("../utils/email");
const subscribe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email richiesta' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Email non valida' });
    }
    try {
        const alreadyExists = yield newsletter_model_1.Newsletter.findOne({ email });
        if (alreadyExists) {
            return res.status(409).json({ message: 'Email già iscritta' });
        }
        const newEntry = new newsletter_model_1.Newsletter({ email });
        yield newEntry.save();
        // Invia l'email di conferma
        yield (0, email_1.sendConfirmationEmail)(email);
        return res.status(201).json({ message: 'Iscrizione completata!' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Errore server', error });
    }
});
exports.subscribe = subscribe;
