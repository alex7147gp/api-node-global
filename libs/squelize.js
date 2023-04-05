const { Sequelize } = require("sequelize");



const { config } = require("./../config/config");

const setupModels = require("./../db/models");



const options = {
	dialect: 'postgres',
	logging: config.idsProd ? false : true,
}


if (config.isProd) {
	options.ssl = {
		rejectUnauthorized: false
	}
}


const sequelize = new Sequelize(config.Url, options);

setupModels(sequelize);

module.exports = sequelize;