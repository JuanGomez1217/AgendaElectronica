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
exports.ImageController = void 0;
const image_component_1 = require("../components/image.component");
const enum_1 = require("../enum");
const response_network_1 = require("../network/response.network");
class ImageController {
    constructor() {
        this.response = new response_network_1.ResponseNetWork();
        this.imageComponent = new image_component_1.ImageComponent();
    }
    /**
     * Retorna una lista de imagen por id_hotel
     * @param req
     * @param res
     * @returns
     */
    getImageForId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_hotel = 2; //Number(req.body.datos.id_hotel);
            let result;
            if (id_hotel > 0) {
                result = yield this.imageComponent.getImageForID(id_hotel);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Error de id_hotel',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Creación una imagen nueva
     * @param req
     * @param res
     * @returns
     */
    createImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newImage = {
                hotel_hotelID: 2,
                urlData: 'tercera imagen'
            }; //req.body.datos.newImage;
            let result;
            if (newImage.hotel_hotelID > 0 && newImage.urlData != '') {
                result = yield this.imageComponent.createImage(newImage);
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
     * Actualiza una imagen
     * @param req
     * @param res
     * @returns
     */
    updateImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newImage = {
                idimage: 1,
                hotel_hotelID: 2,
                urlData: 'tercera imagen'
            }; //req.body.datos.newImage;
            let result;
            if (newImage.idimage &&
                newImage.hotel_hotelID > 0 && newImage.urlData != '') {
                result = yield this.imageComponent.updateImage(newImage);
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
    /** Remueve una imagen por id
     * @param req
     * @param res
     */
    removeImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_image = 6; // req.body.datos.id_image
            let result;
            if (id_image > 0) {
                result = yield this.imageComponent.removeImage(id_image);
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
}
exports.ImageController = ImageController;
//# sourceMappingURL=image.controller.js.map