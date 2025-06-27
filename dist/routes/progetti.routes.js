"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/progetti.routes.ts
const express_1 = __importDefault(require("express"));
const progetti_controller_1 = require("../controllers/progetti.controller");
const router = express_1.default.Router();
router.get('/', progetti_controller_1.getProgetti);
router.get('/:id', progetti_controller_1.getProgettoById);
exports.default = router;
