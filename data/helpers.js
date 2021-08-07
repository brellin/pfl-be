const db = require('./');

module.exports = {
    post: function (post) {
        const [ id ] = db('posts').insert(post);
        return id;
    }
};
