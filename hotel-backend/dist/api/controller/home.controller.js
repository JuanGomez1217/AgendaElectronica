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
exports.HomeController = void 0;
const controller_1 = require("../controller/");
const process_enum_1 = require("../enum/process.enum");
const middleware_1 = require("../middleware");
class HomeController {
    constructor() { }
    encode(req, res) {
        return res.json({
            token: middleware_1.AuthJwt.sign(req.body),
        });
    }
    envio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let hotelController = new controller_1.HotelController();
            let calificacionController = new controller_1.CalificacionController();
            let usuarioController = new controller_1.UsuarioController();
            let imageController = new controller_1.ImageController();
            let proceso = req.body.datos.proceso;
            switch (proceso) {
                case process_enum_1.Process.getHotels:
                    yield hotelController.getHotels(req, res);
                    break;
                case process_enum_1.Process.getHotelForId:
                    yield hotelController.getHotelForId(req, res);
                    break;
                case process_enum_1.Process.createHotel:
                    yield hotelController.createHotel(req, res);
                    break;
                case process_enum_1.Process.updatedHotel:
                    yield hotelController.updateHotel(req, res);
                    break;
                case process_enum_1.Process.removeHotel:
                    yield hotelController.removeHotel(req, res);
                    break;
                case process_enum_1.Process.getHotelsFilter:
                    yield hotelController.gethotelOrder(req, res);
                    break;
                case process_enum_1.Process.getHotelsForStart:
                    yield hotelController.getHotelForStart(req, res);
                    break;
                case process_enum_1.Process.getCalificacionForHotel:
                    yield calificacionController.getCalificaciones(req, res);
                    break;
                case process_enum_1.Process.getCalificacionForId:
                    yield calificacionController.getCalificacionForId(req, res);
                    break;
                case process_enum_1.Process.createCalificacion:
                    yield calificacionController.createCalificacion(req, res);
                    break;
                case process_enum_1.Process.updatedcalificacion:
                    yield calificacionController.updateCalificacion(req, res);
                    break;
                case process_enum_1.Process.removeCalificacion:
                    yield calificacionController.removeCalificacion(req, res);
                    break;
                case process_enum_1.Process.getUsuarios:
                    yield usuarioController.getUsuarios(req, res);
                    break;
                case process_enum_1.Process.getUserForId:
                    yield usuarioController.getUsuarioForId(req, res);
                    break;
                case process_enum_1.Process.createUsuario:
                    yield usuarioController.createUsuario(req, res);
                    break;
                case process_enum_1.Process.updatedUsuario:
                    yield usuarioController.updateUsuario(req, res);
                    break;
                case process_enum_1.Process.removeUsuario:
                    yield usuarioController.removeUsuario(req, res);
                    break;
                case process_enum_1.Process.login:
                    yield usuarioController.login(req, res);
                    break;
                case process_enum_1.Process.getimageForID:
                    yield imageController.getImageForId(req, res);
                    break;
                case process_enum_1.Process.createImageForID:
                    yield imageController.createImage(req, res);
                    break;
                case process_enum_1.Process.updateImage:
                    yield imageController.updateImage(req, res);
                    break;
                case process_enum_1.Process.removeImage:
                    yield imageController.removeImage(req, res);
                    break;
            }
        });
    }
    decode(req, res) {
        return res.json({
            token: middleware_1.AuthJwt.decodeToken(req.body),
        });
    }
}
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map