const db = require('./');

const populateComments = async postId => {
    const comments = await db('comments');
    return comments.filter(comment => parseInt(comment.post_id) === parseInt(postId));
};

module.exports = {

    comments: {

        addComment: async comment => {
            try {
                return await db('comments')
                    .insert(comment)
                    .returning('id');
            } catch (err) {
                throw err;
            }
        },

    },

    posts: {

        post: async post => await db('posts')
            .insert(post)
            .returning('id'),

        getAllPosts: async _ => {

            try {
                let posts = await db('posts');

                console.log('posts (should be array)', posts);

                return posts.map(post => ({
                    ...post,
                    comments: populateComments(post.id)
                }));
            } catch (err) {
                console.log(err);
                throw err;
            }
        },

        getAllPostsByCategory: async cat => {
            try {
                const posts = await db('posts')
                    .where({ category: cat });

                return posts.map(post => ({
                    ...post,
                    comments: populateComments(post.id)
                }));
            } catch (err) {
                console.log(err);
                throw err;
            }
        },

        getOnePost: async id => {

            try {
                const post = await db('posts')
                    .where({ id })
                    .first();

                return {
                    ...post,
                    comments: populateComments(id)
                };
            } catch (err) {
                console.log(err);
                throw err;
            }
        },

        updatePost: async (id, updates) => {
            try {
                const post = await db('posts')
                    .where({ id })
                    .update({ ...updates })
                    .returning([ 'id', 'title', 'text', 'date' ]);

                return populateComments(post);
            } catch (err) {
                throw err;
            }
        },

        deletePost: async id => await db('posts')
            .where({ id })
            .del()

    },

    auth: {

        verify: async name => {
            try {
                return await db('auth')
                    .where('name', name)
                    .first();
            } catch (err) {
                throw err;
            }
        }

    }

};
