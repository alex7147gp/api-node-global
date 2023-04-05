const { Pool } = require("pg");


const { config } = require("./../config/config")



let URI = '';

if (config.isProd) {
	URI = config.dbUri;
}
else {
	const USER = encodeURIComponents(config.dbUser);
    const PASSWORD = encodeURIComponents(config.dbPassword);
    URI = `postgres://${USER}:/${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

}

const pool = new Pool({ connectionString: URI });


module.exports = pool;