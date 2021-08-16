require('dotenv').config();
const commentSeeds = require('./env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].comments;

exports.seed = knex => knex('comments')
  .del()
  .then(_ => knex('comments').insert(commentSeeds));
