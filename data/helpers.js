const db = require('../');

module.exports = {
    find: function (id) {
        const query = db('posts');
        return id ? query.where({ id }).first : query;
    },
    findBy: function (col) {
        return db('posts').where(col);
    },
    post: function (post) {
        return knex('posts')
            .insert({ ...post })
            .returning('*')
            .bind(console)
            .then(console.log)
            .catch(console.error);
    }
};
