
exports.up = function (knex) {
    return knex
        .schema
        .createTable('auth', table => {
            table.increments('id');

            table
                .string('proof')
                .notNullable();

            table
                .string('name')
                .notNullable()
                .unique()
                .references('name')
                .inTable('posts')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('auth');
};
