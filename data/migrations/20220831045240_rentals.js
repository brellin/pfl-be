require('dotenv').config();

exports.up = knex => knex.schema
    .createTable('rentals', table => {

        table.increments('id');

        table
            .string('name')
            .notNullable();

        table
            .string('link')
            .notNullable();

        table
            .boolean('contacted')
            .notNullable();

        table
            .boolean('scheduled')
            .notNullable();

        table
            .boolean('wanted');

    })
    .raw(`ALTER SEQUENCE comments_id_seq RESTART WITH ${ commentSeeds.length + 1 }`);

exports.down = knex => knex.schema.dropTableIfExists('rentals');
