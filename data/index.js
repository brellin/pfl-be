const knex = require('knex');
const knexConfigDev = require('../knexfile').development;
const knexConfigProd = require('../knexfile').development;

module.exports = knex(process.env.DATABASE_URL ? knexConfigProd : knexConfigDev);
