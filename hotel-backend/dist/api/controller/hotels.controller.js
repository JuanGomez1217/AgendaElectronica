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
exports.HotelController = void 0;
const hotel_component_1 = require("../components/hotel.component");
const image_component_1 = require("../components/image.component");
const enum_1 = require("../enum");
const network_1 = require("../network");
class HotelController {
    constructor() {
        this.response = new network_1.ResponseNetWork();
        this.hotelComponent = new hotel_component_1.HotelComponent();
        this.ImageComponent = new image_component_1.ImageComponent();
    }
    /**
     * Retorna todos los hoteles
     * @param req
     * @param res
     * @returns
     */
    getHotels(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.hotelComponent.getHotels();
            let hotels = result.hotels || [];
            if ((hotels === null || hotels === void 0 ? void 0 : hotels.length) >= 0) {
                result.hotels = yield this.addImageHotel(hotels);
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Devuelve un hotel por id
     * @param req
     * @param res
     * @returns
     */
    getHotelForId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_hotel = Number(req.body.datos.id_hotel);
            let result;
            if (id_hotel > 0) {
                result = yield this.hotelComponent.getHotelForID(id_hotel);
                if (result.hotel) {
                    let hot = [Object.assign({}, result.hotel)];
                    result.hotels = yield this.addImageHotel(hot);
                    delete result.hotel;
                }
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
     * Ordenar hoteles segun su campo en desc o asc
     * @param req
     * @param res
     * @returns
     */
    gethotelOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let formOrder = req.body.datos.formaOrder;
            let campo = req.body.datos.campo;
            let result;
            if (formOrder != '' && campo != '') {
                result = yield this.hotelComponent.getHotelsOrder(campo, formOrder);
                let hotels = result.hotels || [];
                if ((hotels === null || hotels === void 0 ? void 0 : hotels.length) >= 0) {
                    result.hotels = yield this.addImageHotel(hotels);
                }
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Error en los parametros',
                    status: '200'
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /***
     * Retornar una lista de hoteles por su categoria (estrellas)
     */
    getHotelForStart(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let estrellas = Number(req.body.datos.estrellas);
            let result;
            if (estrellas > 0) {
                result = yield this.hotelComponent.getHotelForStar(estrellas);
                let hotels = result.hotels || [];
                if ((hotels === null || hotels === void 0 ? void 0 : hotels.length) >= 0) {
                    result.hotels = yield this.addImageHotel(hotels);
                }
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Error en el parametro estrella',
                    status: '200'
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Agregar las imaganes a los hoteles
     * @param hoteles
     * @returns
     */
    addImageHotel(hoteles) {
        return __awaiter(this, void 0, void 0, function* () {
            let hotelWithImage = [];
            for (let i = 0; i < hoteles.length; i++) {
                let image = yield this.ImageComponent.getImageForID(Number(hoteles[i].hotelID));
                hotelWithImage.push({
                    hotelID: hoteles[i].hotelID,
                    hotelName: hoteles[i].hotelName,
                    precio: hoteles[i].precio,
                    categoria: hoteles[i].categoria,
                    Image: image.urlData,
                    createdAt: hoteles[i].createdAt,
                    updatedAt: hoteles[i].updatedAt,
                });
            }
            return hotelWithImage;
        });
    }
    /**
     * Creación de hotel
     * @param req
     * @param res
     * @returns
     */
    createHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newHotell;
            let newHotel = {
                hotelName: 'Miami Bich123',
                precio: 512
            }; //req.body.datos.newHotel;
            let result;
            if (newHotel.hotelName != '' && newHotel.precio > 0) {
                newHotel.categoria = 5; //Por defecto un hotel tiene 5 estrellas
                result = yield this.hotelComponent.createHotel(newHotel);
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
     * Actualización de hotel
     * @param req
     * @param res
     * @returns
     */
    updateHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let updateHotel = {
                hotelID: 6,
                hotelName: 'Miami Bich123 updated',
                precio: 515,
                categoria: 4
            }; //req.body.newHotel;
            let result;
            if (updateHotel.hotelName != '' && updateHotel.precio > 0 &&
                updateHotel.categoria && updateHotel.categoria >= 1 && updateHotel.categoria <= 5) {
                result = yield this.hotelComponent.updateHotel(updateHotel);
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
     * Actualización de categoria (estrellas)
     * @param id_hotel
     * @param category
     */
    updatedCategory(id_hotel, category) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id_hotel > 0 && category > 0 && category <= 5) {
                yield this.hotelComponent.updateCategory(id_hotel, category);
            }
        });
    }
    /** Remueve un hotel por Id
     * Borrado de hotel
     * @param req
     * @param res
     */
    removeHotel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_hotel = 6; // req.body.datos.id_hotel
            let result;
            if (id_hotel > 0) {
                result = yield this.hotelComponent.removeHotel(id_hotel);
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
exports.HotelController = HotelController;
//# sourceMappingURL=hotels.controller.js.map