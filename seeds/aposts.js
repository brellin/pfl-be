require('dotenv').config();
const postSeeds = require('./env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].posts;

exports.seed = knex => knex('posts')
  .del()
  .then(_ => {
    // set the auto increment number to start after the seeds 
    knex.schema.raw(`alter table posts auto_increment = ${ postSeeds.length + 1 }`);

    return knex('posts').insert(postSeeds);
  });
