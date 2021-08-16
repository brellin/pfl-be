require('dotenv').config();
const { hashSync } = require('bcrypt');
exports.seed = knex => knex('auth')
  .del()
  .then(_ => knex('auth').insert([
    {
      id: 1,
      name: 'Will Umstead',
      proof: hashSync(process.env.PW, 10)
    }
  ]));
