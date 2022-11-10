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
exports.ImageComponent = void 0;
const coderror_enum_1 = require("../enum/coderror.enum");
const models_1 = require("../models");
class ImageComponent {
    constructor() { }
    /**
     * Retorna las imagenes de un hotel
     * @param id_hotel
     * @returns
     */
    getImageForID(id_hotel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Image.findAll({
                    attributes: [
                        `idimage`, `hotel_hotelID`, `urlData`, `createdAt`, `updatedAt`
                    ],
                    where: {
                        hotel_hotelID: id_hotel
                    },
                    raw: true
                }).then(result => {
                    if (result) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Exitoso',
                            status: 200,
                            urlData: result
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No se encontro ninguna imagen',
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
     * Guardar imagen de hotel en Base64
     * @param data
     * @returns
     */
    createImage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Image.create(Object.assign({}, data), { raw: true })
                    .then(result => {
                    return {
                        code: coderror_enum_1.Coderror.Exitoso,
                        mensaje: 'Imagen guardada con exito',
                        status: 200
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
     * Actualizar url de una imagen
     * @param data
     * @returns
     */
    updateImage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Image.update(data, {
                    where: {
                        idimage: data.idimage
                    }
                }).then(result => {
                    if (result[0] == 1) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Imagen actualizada con exito',
                            status: 200,
                            body: result
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No existe la imagen',
                            status: 200
                        };
                    }
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
     * Remover una imagen de hotel
     * @param id_image
     * @returns
     */
    removeImage(id_image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Image.destroy({
                    where: {
                        hotel_hotelID: id_image
                    }
                }).then(result => {
                    if (result == 1) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Se ha eliminado con exito',
                            status: 200,
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'No existe la imagen',
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
exports.ImageComponent = ImageComponent;
//# sourceMappingURL=image.component.js.map