require('dotenv').config({ path: './.env.local' });
const postSeeds = require('../../seeds/env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].posts;

exports.up = knex => knex
    .schema
    .createTable('posts', table => {

        table
            .increments('id');

        table
            .string('title')
            .notNullable();

        table
            .text('text', 'longtext')
            .notNullable();

        table
            .string('date')
            .notNullable();

        table
            .string('name')
            .notNullable();

        table
            .string('edited');

        table
            .string('category');

    })
    .raw(`ALTER SEQUENCE posts_id_seq RESTART WITH ${ postSeeds.length + 1 }`);

exports.down = knex => knex
    .schema
    .dropTableIfExists('posts');
