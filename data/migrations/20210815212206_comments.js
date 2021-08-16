const commentSeeds = require('../../seeds/env')[ process.env.ENV === 'Production' ? 'production' : 'development' ].comments;

exports.up = knex => knex.schema
    .createTable('comments', table => {

        table.increments('id');

        table
            .string('name')
            .notNullable();

        table
            .text('content', 'longtext')
            .notNullable();

        table
            .string('date')
            .notNullable();

        table
            .integer('post_id')
            .references('posts.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .notNullable();

    })
    .raw(`ALTER SEQUENCE comments_id_seq RESTART WITH ${ commentSeeds.length + 1 }`);

exports.down = knex => knex.schema.dropTableIfExists('comments');
