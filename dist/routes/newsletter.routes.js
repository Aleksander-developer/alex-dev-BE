"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/newsletter.routes.ts
const express_1 = __importDefault(require("express"));
const newsletter_controller_1 = require("../controllers/newsletter.controller");
// import { subscribe } from '../controllers/newsletter.controller';
const router = express_1.default.Router();
router.post('/', (req, res, next) => {
    Promise.resolve((0, newsletter_controller_1.subscribe)(req, res)).catch(next);
});
exports.default = router;
