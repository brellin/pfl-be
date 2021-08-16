require('dotenv').config();
const authSeeds = require('./env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].auth;
exports.seed = knex => knex('auth')
  .del()
  .then(_ => knex('auth').insert(authSeeds));
