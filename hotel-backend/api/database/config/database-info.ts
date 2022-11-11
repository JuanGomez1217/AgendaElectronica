import { Options, Sequelize } from "sequelize";

const config: Options = {
    dialect: 'mysql',
    host: 'host.docker.internal',
    port: 23306,
    database: 'cheil',
    username: 'root',
    password: 'sa12345678'
}

export const sequelize = new Sequelize(config);