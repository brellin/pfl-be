exports.up = function (knex, Promise) {
    return knex.schema.createTable('posts', col => {

        col.increments();

        col
            .string('title')
            .notNullable();

        col
            .string('text')
            .notNullable();

        col
            .string('date')
            .notNullable();

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('posts');
};
