"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const home_controller_1 = require("../controller/home.controller");
const router = express_1.Router();
const homeController = new home_controller_1.HomeController();
const usuarioController = new controller_1.UsuarioController();
//Rutas
// Uso pocas rutas ya que suelo enviar un token para la misma petició
//  y separarlas por el numero de proceso contenido en ellos
router.post('/envio', homeController.envio);
//router.post('encode', homeController.encode);
//router.post('decode', homeController.decode);
exports.default = router;
//# sourceMappingURL=index.js.map