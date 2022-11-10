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
exports.CalificacionController = void 0;
const calificacion_component_1 = require("../components/calificacion.component");
const enum_1 = require("../enum");
const network_1 = require("../network");
const hotels_controller_1 = require("./hotels.controller");
class CalificacionController {
    constructor() {
        this.response = new network_1.ResponseNetWork();
        this.calificacionComponent = new calificacion_component_1.CalificacionComponent();
        this.hotelController = new hotels_controller_1.HotelController();
    }
    /**
     * Trae las calificaciones por hotel
     * @param req
     * @param res
     * @returns
     */
    getCalificaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_hotel = req.body.datos.id_hotel;
            let result;
            if (id_hotel > 0) {
                result = yield this.calificacionComponent.getCalificacionesForHotel(id_hotel);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorId_Hotel,
                    mensaje: 'El parametro no es valido',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Permite traer la calificacion por id de usuario y hotel
     * @param req
     * @param res
     * @returns
     */
    getCalificacionForId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_hotel = req.body.datos.id_hotel;
            let id_user = req.body.datos.id_user;
            let result;
            if (id_hotel > 0 && id_user > 0) {
                result = yield this.calificacionComponent.getCalificacionForID(id_hotel, id_user);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Los parametros no son validos',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Permite la creación de calificaciones
     * @param req
     * @param res
     * @returns
     */
    createCalificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let calificacion = req.body.datos.newCalificacion;
            let result;
            if (calificacion.comentario && calificacion.hotel_hotelID &&
                calificacion.usuario_userID && calificacion.estrellas > 0) {
                result = yield this.calificacionComponent.createCalificacion(calificacion);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Los parametros no son validos',
                    status: 200
                };
            }
            this.traerCalificaciones(calificacion.hotel_hotelID);
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Permite la actualización de una calificacion
     * @param req
     * @param res
     * @returns
     */
    updateCalificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let calificacion = req.body.datos.updateCalificacion;
            let result;
            if (calificacion.idcalificacion && calificacion.idcalificacion > 0 &&
                calificacion.comentario != '' && calificacion.hotel_hotelID > 0 &&
                calificacion.usuario_userID > 0 && calificacion.estrellas > 0) {
                result = yield this.calificacionComponent.updateCalificacion(calificacion);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Los parametros no son validos',
                    status: 200
                };
            }
            this.traerCalificaciones(calificacion.hotel_hotelID);
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Remueve la calificación por Id
     * @param req
     * @param res
     * @returns
     */
    removeCalificacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_calificacion = req.body.datos.id_calificacion;
            let result;
            if (id_calificacion > 0) {
                result = yield this.calificacionComponent.removeCalificacion(id_calificacion);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorId_Pago,
                    mensaje: 'Los parametros no son validos',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    traerCalificaciones(id_hotel) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.calificacionComponent.getCalificacionesForHotel(id_hotel);
            let totalEstrellas = 0;
            (_a = result.calificaciones) === null || _a === void 0 ? void 0 : _a.forEach(cal => {
                totalEstrellas += cal.estrellas;
            });
            let estrellasTotal = totalEstrellas / Number((_b = result.calificaciones) === null || _b === void 0 ? void 0 : _b.length);
            yield this.hotelController.updatedCategory(id_hotel, estrellasTotal);
        });
    }
}
exports.CalificacionController = CalificacionController;
//# sourceMappingURL=calificacion.controller.js.map