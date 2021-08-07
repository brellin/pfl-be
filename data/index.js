const knex = require('knex');
const knexConfig = require('../knexfile');

module.exports = knex(process.env.ENV === 'Production' ? knexConfig.production : knexConfig.development);
