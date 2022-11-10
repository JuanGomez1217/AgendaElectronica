"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
const sequelize_1 = require("sequelize");
const database_info_1 = require("../database/config/database-info");
const image_model_1 = require("./image.model");
class Hotel extends sequelize_1.Model {
}
exports.Hotel = Hotel;
Hotel.init({
    hotelID: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    hotelName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            is: {
                args: ['^([a-zA-Z0-9._-]+ ?[a-zA-z0-9._-]+?)+$'],
                msg: 'Los caracteres no son validos'
            },
            len: {
                args: [3, 50],
                msg: 'La cantidad de caracteres va de 3 a 50'
            }
        }
    },
    categoria: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    sequelize: database_info_1.sequelize,
    tableName: 'hotel'
});
//Relación de 1:M
Hotel.hasOne(image_model_1.Image, {
    foreignKey: {
        name: 'hotel_hotelID',
        allowNull: false
    },
    sourceKey: 'hotelID'
});
image_model_1.Image.belongsTo(Hotel);
//# sourceMappingURL=hotel.model.js.map