const db = require('./');

module.exports = {

    post: async post => await db('posts')
        .insert(post)
        .returning('id'),

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
        const posts = await db('posts');
        const comments = await db('comments');
        return posts.map(post => ({
            ...post,
            comments: comments
                .filter(comment => comment.post_id === post.id)
                .map(c => {
                    delete c[ 'post_id' ];
                    return c;
                })
        }));
    },

    addComment: async comment => await db('comments')
        .insert(comment)
        .returning('id')

};
