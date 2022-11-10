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
exports.CalificacionComponent = void 0;
const coderror_enum_1 = require("../enum/coderror.enum");
const calificacion_model_1 = require("../models/calificacion.model");
const usuario_model_1 = require("../models/usuario.model");
class CalificacionComponent {
    constructor() { }
    /**
     * Retorna todas la calificaciones de un hotel
     * @param id_hotel
     * @returns
     */
    getCalificacionesForHotel(id_hotel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield calificacion_model_1.Calificacion.findAll({
                    where: {
                        hotel_hotelID: id_hotel
                    },
                    nest: true,
                    include: [{
                            model: usuario_model_1.Usuario,
                            attributes: [['userName', 'nombre'], ['userSurname', 'apellido']],
                        }],
                    raw: true,
                }).then(result => {
                    return {
                        code: 0,
                        mensaje: 'Exitoso',
                        status: 200,
                        calificaciones: result
                    };
                }).catch(error => {
                    return {
                        code: coderror_enum_1.Coderror.ErrorDatabase,
                        mensaje: 'Error database',
                        status: 500,
                        body: error
                    };
                });
            }
            catch (error) {
                return {
                    code: coderror_enum_1.Coderror.ErrorServer,
                    mensaje: 'Error Internal Server',
                    status: 500,
                    body: error
                };
            }
        });
    }
    /**
     * Retorna una calificacion por Id de usuario y hotel
     * @param id_hotel
     * @param id_user
     * @returns
     */
    getCalificacionForID(id_hotel, id_user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield calificacion_model_1.Calificacion.findOne({
                    where: {
                        hotel_hotelID: id_hotel,
                        usuario_userID: id_user
                    }
                }).then(result => {
                    if (result) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Exitoso',
                            status: 200,
                            calificacion: result
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No se encontro ningun hotel',
                            status: 200
                        };
                    }
                }).catch(error => {
                    return {
                        code: coderror_enum_1.Coderror.ErrorDatabase,
                        mensaje: 'Error database',
                        status: 500,
                        body: error
                    };
                });
            }
            catch (error) {
                return {
                    code: coderror_enum_1.Coderror.ErrorServer,
                    mensaje: 'Error Internal Server',
                    status: 500,
                    body: error
                };
            }
        });
    }
    /**
     * Permite crear una nueva calificación
     * @param data
     * @returns
     */
    createCalificacion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield calificacion_model_1.Calificacion.create(Object.assign({}, data), { raw: true })
                    .then(result => {
                    return {
                        code: coderror_enum_1.Coderror.Exitoso,
                        mensaje: 'Calificación creada con exito',
                        status: 200,
                        calificacion: result
                    };
                }).catch((error) => {
                    return {
                        code: coderror_enum_1.Coderror.ErrorDatabase,
                        mensaje: 'Error Database',
                        status: 200,
                        body: error.message
                    };
                });
            }
            catch (error) {
                return {
                    code: coderror_enum_1.Coderror.ErrorServer,
                    mensaje: 'Error Internal Server',
                    status: 500,
                    body: error
                };
            }
        });
    }
    /**
     * Actualizar los datos de una calificación
     * @param data
     * @returns
     */
    updateCalificacion(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield calificacion_model_1.Calificacion.update(data, {
                    where: {
                        idcalificacion: data.idcalificacion
                    },
                }).then(result => {
                    if (result[0] == 1) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Calificación actualizada con exito',
                            status: 200,
                            calificacions: result[1]
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No existe la calificación',
                            status: 200
                        };
                    }
                }).catch((error) => {
                    return {
                        code: coderror_enum_1.Coderror.ErrorDatabase,
                        mensaje: 'Error Database',
                        status: 200,
                        body: error
                    };
                });
            }
            catch (error) {
                return {
                    code: coderror_enum_1.Coderror.ErrorServer,
                    mensaje: 'Error Internal Server',
                    status: 500,
                    body: error
                };
            }
        });
    }
    /**
     * Remueve una calificación
     * @param id_calificacion
     * @returns
     */
    removeCalificacion(id_calificacion) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield calificacion_model_1.Calificacion.destroy({
                    where: {
                        idcalificacion: id_calificacion
                    }
                }).then(result => {
                    if (result == 1) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Se ha eliminado con exito la calificación',
                            status: 200,
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No existe la calificación',
                            status: 200
                        };
                    }
                }).catch(error => {
                    return {
                        code: coderror_enum_1.Coderror.ErrorDatabase,
                        mensaje: 'Error Database',
                        status: 500,
                        body: error
                    };
                });
            }
            catch (error) {
                return {
                    code: coderror_enum_1.Coderror.ErrorServer,
                    mensaje: 'Error Internal Server',
                    status: 500,
                    body: error
                };
            }
        });
    }
}
exports.CalificacionComponent = CalificacionComponent;
//# sourceMappingURL=calificacion.component.js.map