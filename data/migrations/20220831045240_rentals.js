require('dotenv').config();

exports.up = knex => knex.schema
    .createTable('rentals', table => {

        table.increments('id');

        table
            .string('name')
            .unique()
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

    });

exports.down = knex => knex.schema.dropTableIfExists('rentals');
