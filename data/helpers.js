const db = require('./');
const Posts = db('posts');
const Comments = db('comments');
const Auth = db('auth');

const populateComments = (postId, comments) => comments
    .filter(comment => parseInt(comment.post_id) === parseInt(postId))
    .map(c => {
        delete c[ 'post_id' ];
        return c;
    });

module.exports = {

    comments: {

        addComment: async comment => {
            try {
                return await Comments
                    .insert(comment)
                    .returning('id');
            } catch (err) {
                throw err;
            }
        },

    },

    posts: {

        post: async post => {
            try {
                await Posts
                    .insert(post)
                    .returning('id');
            } catch (err) {
                throw err;
            }
        },

        getAllPosts: async _ => {
            const comments = await Comments;

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

        getOnePost: async id => {
            const comments = await Comments;

            try {
                const post = await db('posts').where({ id }).first();
                console.log('post', post);
                return {
                    ...post,
                    comments: populateComments(id, comments)
                };
            } catch (err) {
                throw err;
            }
        }

    },

    auth: {

        verify: async name => {
            try {
                return await Auth
                    .where('name', name)
                    .first();
            } catch (err) {
                throw err;
            }
        }

    }

};
