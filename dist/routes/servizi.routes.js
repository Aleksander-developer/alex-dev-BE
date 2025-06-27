"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/servizi.routes.ts
const express_1 = __importDefault(require("express"));
const servizi_controller_1 = require("../controllers/servizi.controller");
const router = express_1.default.Router();
router.get('/', servizi_controller_1.getServizi);
exports.default = router;
