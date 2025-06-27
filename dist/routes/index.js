"use strict";
// <-- Importa e aggrega tutte le rotte qui
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newsletter_routes_1 = __importDefault(require("./newsletter.routes"));
const progetti_routes_1 = __importDefault(require("./progetti.routes"));
const chi_sono_routes_1 = __importDefault(require("./chi-sono.routes"));
const contatti_routes_1 = __importDefault(require("./contatti.routes"));
const servizi_routes_1 = __importDefault(require("./servizi.routes"));
const router = express_1.default.Router();
router.use('/newsletter', newsletter_routes_1.default);
router.use('/progetti', progetti_routes_1.default);
router.use('/chi-sono', chi_sono_routes_1.default);
router.use('/contatti', contatti_routes_1.default);
router.use('/servizi', servizi_routes_1.default);
exports.default = router;
