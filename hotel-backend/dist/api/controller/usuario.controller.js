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
exports.UsuarioController = void 0;
const usuario_component_1 = require("../components/usuario.component");
const enum_1 = require("../enum");
const response_network_1 = require("../network/response.network");
class UsuarioController {
    constructor() {
        this.response = new response_network_1.ResponseNetWork();
        this.usuarioComponent = new usuario_component_1.UsuarioComponent();
    }
    /**
     * Retorna todos los usuario
     * @param req
     * @param res
     * @returns
     */
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.usuarioComponent.getUsuarios();
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Retorna un usuario por id
     * @param req
     * @param res
     * @returns
     */
    getUsuarioForId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_usuario = Number(req.body.datos.id_usuario);
            let result;
            if (id_usuario > 0) {
                result = yield this.usuarioComponent.getUsuarioForID(id_usuario);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Error de id_usuario',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
    /**
     * Creación de un nuevo usuario
     * @param req
     * @param res
     * @returns
     */
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUsuario = req.body.datos.newUsuario;
            let result;
            if (newUsuario.userName != '' && newUsuario.userSurname != '' &&
                newUsuario.userMail != '' && newUsuario.userPassword != '') {
                result = yield this.usuarioComponent.createUsuario(newUsuario);
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
     * Actualiza los datos de un usuario
     * @param req
     * @param res
     * @returns
     */
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let updatedUsuario = {
                userID: 1,
                userName: 'Rocio',
                userSurname: 'murcia',
                userPassword: '12345',
                userMail: 'rociomurcia@cheil.com'
            }; //req.body.datos.updatedUsuario;
            let result;
            if (updatedUsuario.userID &&
                updatedUsuario.userName != '' && updatedUsuario.userSurname != '' &&
                updatedUsuario.userMail != '' && updatedUsuario.userPassword != '') {
                result = yield this.usuarioComponent.updateUsuario(updatedUsuario);
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
    /** Remueve un usuario por su id
     * Borrado de hotel
     * @param req
     * @param res
     */
    removeUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_usuario = 6; // req.body.datos.id_usuario
            let result;
            if (id_usuario > 0) {
                result = yield this.usuarioComponent.removeUsuario(id_usuario);
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
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let email = req.body.datos.email;
            let clave = req.body.datos.clave;
            let result;
            if (email != '' && clave != '') {
                result = yield this.usuarioComponent.loginUsuario(email, clave);
            }
            else {
                result = {
                    code: enum_1.Coderror.ErrorParametro,
                    mensaje: 'Parametros de login invalidos',
                    status: 200
                };
            }
            return this.response.response(result, result.status, res);
        });
    }
}
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map