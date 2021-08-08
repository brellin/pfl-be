exports.up = function (knex) {
    return knex.schema
        .createTable('posts', table => {

            table.increments('id');

            table
                .string('title')
                .notNullable();

            table
                .string('text')
                .notNullable();

            table
                .string('date')
                .notNullable();

            table
                .string('name')
                .notNullable()
                .unique();

        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
