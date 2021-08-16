require('dotenv').config();
const postSeeds = require('../../seeds/env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].posts;

exports.up = function (knex) {
    return knex.schema
        .createTable('posts', table => {

            table.increments('id');

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

        })
        .raw(`ALTER SEQUENCE posts_id_seq RESTART WITH ${ postSeeds.length + 1 }`);
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
