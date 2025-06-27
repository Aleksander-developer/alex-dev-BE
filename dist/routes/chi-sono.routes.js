"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/chi-sono.routes.ts
const express_1 = __importDefault(require("express"));
const chi_sono_controller_1 = require("../controllers/chi-sono.controller");
const router = express_1.default.Router();
router.get('/', chi_sono_controller_1.getProfilo);
exports.default = router;
