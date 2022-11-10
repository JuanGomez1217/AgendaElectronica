"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const database_info_1 = require("../database/config/database-info");
class Usuario extends sequelize_1.Model {
}
exports.Usuario = Usuario;
Usuario.init({
    userID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ['^([a-zA-Z._-]+ ?[a-zA-z._-]+?)+$'],
                msg: 'EL Nombre no son valido'
            },
            len: {
                args: [3, 50],
                msg: 'La cantidad de caracteres va de 3 a 50'
            }
        }
    },
    userSurname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ['^([a-zA-Z._-]+ ?[a-zA-z._-]+?)+$'],
                msg: 'EL Apellido no son valido'
            },
            len: {
                args: [3, 50],
                msg: 'La cantidad de caracteres va de 3 a 50'
            }
        }
    },
    userMail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ['^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'],
                msg: 'EL Correo no es valido'
            },
            len: {
                args: [3, 255],
                msg: 'La cantidad de caracteres va de 3 a 50'
            }
        }
    },
    userPassword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ['^([a-zA-Z0-9._-]+ ?[a-zA-Z0-9._-]+?)+$'],
                msg: 'La contraseña no es valida'
            },
            len: {
                args: [3, 255],
                msg: 'La cantidad de caracteres va de 3 a 50'
            }
        }
    },
}, {
    sequelize: database_info_1.sequelize,
    tableName: 'usuario'
});
//# sourceMappingURL=usuario.model.js.map