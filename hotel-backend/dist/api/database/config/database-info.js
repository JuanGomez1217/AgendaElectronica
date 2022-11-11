"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config = {
    dialect: 'mysql',
    host: 'host.docker.internal',
    port: 23306,
    database: 'cheil',
    username: 'root',
    password: 'sa12345678'
};
exports.sequelize = new sequelize_1.Sequelize(config);
//# sourceMappingURL=database-info.js.map