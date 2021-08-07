exports.up = function (knex) {
    return knex.schema
        .createTable('posts', table => {

            table.increments().primary();

            table
                .string('title')
                .notNullable();

            table
                .string('text')
                .notNullable();

            table
                .string('date')
                .notNullable();

        });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('posts');
};
