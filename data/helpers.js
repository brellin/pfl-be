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
        const { text, title, date } = post;
        const [ id ] = db('posts').insert({ text, title, date });
        return id;
    }
};
