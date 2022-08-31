const db = require('./');

module.exports = {

    comments: {

        addComment: async comment => await db('comments')
            .insert(comment)
            .returning('id'),

    },

    posts: {

        post: async post => await db('posts')
            .insert(post)
            .returning('id'),

        getAllPosts: async _ => await db('posts'),

        getAllCategories: async _ => await db('posts')
            .distinct('category')
            .select('category'),

        getAllPostsByCategory: async category => await db('posts')
            .where({ category }),

        getOnePost: async id => {

            const post = await db('posts')
                .where({ id })
                .first();

            return {
                ...post,
                comments: await db('comments').where({ post_id: id })
            };
        },

        updatePost: async (id, updates) => {
            const post = await db('posts')
                .where({ id })
                .update({ ...updates })
                .returning([ 'id', 'title', 'text', 'date' ]);

            return {
                ...post,
                comments: await db('comments').where({ post_id: id })
            };
        },

        deletePost: async id => await db('posts')
            .where({ id })
            .del()

    },

    auth: {

        verify: async name => await db('auth')
            .where('name', name)
            .first(),

    },

    rentals: {

        getAllRentals: async _ => await db('rentals'),

        updateRental: async (id, updates) => await db('rentals')
            .where({ id })
            .update({ ...updates })
            .returning([ 'id', 'name', 'link', 'contacted', 'scheduled', 'wanted' ]),

        deleteRental: async id => await db('rentals')
            .where({ id })
            .del()

    }

};
