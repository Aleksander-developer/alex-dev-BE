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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviaMessaggio = void 0;
const contatti_model_1 = require("../models/contatti.model");
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const inviaMessaggio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome, email, messaggio, cellulare } = req.body;
    console.log('Ricevuto:', req.body);
    if (!nome || !email || !messaggio) {
        return res.status(400).json({ message: 'Tutti i campi obbligatori' });
    }
    try {
        // 1. Salva nel DB
        const nuovoMessaggio = new contatti_model_1.Contatto({ nome, email, messaggio, cellulare });
        yield nuovoMessaggio.save();
        // 2. Crea il transporter nodemailer
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // <-- gestisce certificati self-signed
            }
        });
        // 3. Email al proprietario del sito
        const mailToAdmin = {
            from: `"Modulo Contatti" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_DESTINATION,
            subject: '📩 Nuovo messaggio dal modulo contatti',
            html: `
        <h2>Hai ricevuto un nuovo messaggio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cellulare:</strong> ${cellulare || 'Non fornito'}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${messaggio}</p>
      `
        };
        // 4. Email di conferma all'utente
        const mailToUser = {
            from: `"${process.env.SITE_NAME || 'Il tuo sito'}" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: '✅ Conferma ricezione messaggio',
            html: `
        <p>Ciao ${nome},</p>
        <p>Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.</p>
        <hr>
        <p><strong>Messaggio:</strong></p>
        <blockquote>${messaggio}</blockquote>
        <br>
        <p>— ${process.env.SITE_NAME || 'Il team'}.</p>
      `
        };
        // 5. Invia entrambe le email
        yield transporter.sendMail(mailToAdmin);
        yield transporter.sendMail(mailToUser);
        return res.status(201).json({ message: 'Messaggio inviato con successo' });
    }
    catch (error) {
        console.error('Errore invio:', error);
        return res.status(500).json({ message: 'Errore del server', error });
    }
});
exports.inviaMessaggio = inviaMessaggio;
