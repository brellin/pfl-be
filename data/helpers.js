const db = require('./');

const populateComments = (postId, comments) => {
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
            throw err;
        }
    },

    verify: async name => {
        try {
            return await db('auth')
                .where('name', name)
                .first();
        } catch (err) {
            throw err;
        }
    },

    getAllPosts: async _ => {
        const comments = await db('comments');

        try {
            let posts = await db('posts');

            return posts.map(post => ({
                ...post,
                comments: populateComments(post.id, comments)
            }));
        } catch (err) {
            throw err;
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
    },

    getOnePost: async id => {
        try {
            const post = await db('posts').where({ id });
            console.log(post);
            return {
                ...post,
                comments: await populateComments(id)
            };
        } catch (err) {
            throw err;
        }
    }

};
