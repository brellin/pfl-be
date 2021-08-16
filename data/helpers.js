const db = require('./');

const populateComments = async postId => {
    const comments = await db('comments');

    return comments
        .filter(comment => comment.post_id === postId)
        .map(c => {
            delete c[ 'post_id' ];
            return c;
        });
};

module.exports = {

    post: async post => {
        try {
            await db('posts')
                .insert(post)
                .returning('id');
        } catch (err) {
            throw new Error(err);
        }
    },

    verify: async name => {
        try {
            return await db('auth')
                .where('name', name)
                .first();
        } catch (err) {
            throw new Error(err);
        }
    },

    getAllPosts: async _ => {
        try {
            const posts = await db('posts');
            return posts.map(post => ({
                ...post,
                comments: populateComments(post.post_id)
            }));
        } catch (err) {
            throw new Error(err);
        }
    },

    addComment: async comment => {
        try {
            return await db('comments')
                .insert(comment)
                .returning('id');
        } catch (err) {
            throw err;
        }
    }

};
