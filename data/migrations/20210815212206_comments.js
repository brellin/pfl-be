
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
            .notNullable();

    });

exports.down = knex => knex.schema.dropTableIfExists('comments');
