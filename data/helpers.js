const { compareSync } = require('bcrypt');
const db = require('./');

module.exports = {

    post: async post => {
        const id = await db('posts')
            .insert(post)
            .returning('id');
        return id;
    },

    verify: async name => {
        const userOnFile = await db('auth')
            .where('name', name)
            .first();

        if (userOnFile) {
            return userOnFile;
        } else {
            throw new Error();
        }
    },

    get: async _ => {
        return await db('posts').limit(10);
    }

};
