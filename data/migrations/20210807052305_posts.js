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

        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
