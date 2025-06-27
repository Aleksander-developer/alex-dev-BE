"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/contatti.routes.ts
const express_1 = __importDefault(require("express"));
const contatti_controller_1 = require("../controllers/contatti.controller");
const router = express_1.default.Router();
router.post('/', (req, res, next) => {
    (0, contatti_controller_1.inviaMessaggio)(req, res).catch(next);
});
exports.default = router;
