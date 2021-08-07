const db = require('../');

module.exports = {
    find: function (id) {
        const query = db('posts');
        return id ? query.where({ id }).first : query;
    },
    findBy: function (col) {
        return db('posts').where(col);
    },
    post: async function (post) {
        const [ id ] = await db('posts').insert({ ...post });
        return id;
    }
};
