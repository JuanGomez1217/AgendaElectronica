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
exports.UsuarioComponent = void 0;
const coderror_enum_1 = require("../enum/coderror.enum");
const models_1 = require("../models");
class UsuarioComponent {
    constructor() { }
    /**
     * Retorna todos los usuario
     * @returns
     */
    getUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Usuario.findAll({
                    attributes: [
                        `userID`, `userName`,
                        `userSurname`, `userMail`,
                        `userPassword`, `createdAt`,
                        `updatedAt`
                    ],
                    raw: true
                }).then(result => {
                    return {
                        code: 0,
                        mensaje: 'Exitoso',
                        status: 200,
                        usuarios: result
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
     * Retorna un usuario por su id
     * @param id_usuario
     * @returns
     */
    getUsuarioForID(id_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Usuario.findByPk(id_usuario, {
                    attributes: [
                        `userID`, `userName`,
                        `userSurname`, `userMail`,
                        `userPassword`, `createdAt`,
                        `updatedAt`
                    ],
                    raw: true
                }).then(result => {
                    if (result) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Exitoso',
                            status: 200,
                            usuario: result
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
     * Crea un nuevo usuario
     * @param data
     * @returns
     */
    createUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Usuario.create(Object.assign({}, data), { raw: true })
                    .then(result => {
                    return {
                        code: coderror_enum_1.Coderror.Exitoso,
                        mensaje: 'Usuario creado con exito',
                        status: 200,
                        usuario: result
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
     * Actualiza datos de un usuario
     * @param data
     * @returns
     */
    updateUsuario(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = yield this.getUsuarioForID(Number(data.userID));
                if (result.usuario) {
                    return yield models_1.Usuario.update(data, {
                        where: {
                            userID: data.userID
                        }
                    }).then(result => {
                        if (result[0] == 1) {
                            return {
                                code: coderror_enum_1.Coderror.Exitoso,
                                mensaje: 'Usuario actualizado con exito',
                                status: 200,
                                hotel: result[1]
                            };
                        }
                        else {
                            return {
                                code: coderror_enum_1.Coderror.Exitoso,
                                mensaje: 'No se ha actualizado el usuario, intente de nuevo',
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
                else {
                    return {
                        code: coderror_enum_1.Coderror.Exitoso,
                        mensaje: 'No existe el usuario',
                        status: 200
                    };
                }
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
     * Remover un usuario por su id
     * @param id_usuario
     * @returns
     */
    removeUsuario(id_usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Usuario.destroy({
                    where: {
                        userID: id_usuario
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
                            mensaje: 'No existe el usuario',
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
    /**
     * COmprueba los datos basicos de usuario para inicio de sesión
     * @param email
     * @param password
     * @returns
     */
    loginUsuario(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield models_1.Usuario.findOne({
                    attributes: [
                        `userID`, `userName`, `userSurname`, `userMail`,
                        `userPassword`, `createdAt`, `updatedAt`,
                    ],
                    where: {
                        userMail: email,
                        userPassword: password
                    },
                    raw: true
                }).then(result => {
                    if (result != null) {
                        return {
                            code: coderror_enum_1.Coderror.Exitoso,
                            mensaje: 'Ingreso exitoso',
                            status: 200,
                            usuario: result
                        };
                    }
                    else {
                        return {
                            code: coderror_enum_1.Coderror.SesionInvalida,
                            mensaje: 'La información de usuario no es valida',
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
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=usuario.component.js.map