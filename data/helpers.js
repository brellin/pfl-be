const db = require('./');

module.exports = {
    post: async function (post) {
        const id = await db('posts').insert(post).returning('id');
        return id;
    }
};
