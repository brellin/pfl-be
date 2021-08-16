const postsRouter = require('express').Router();
const Posts = require('../data/helpers');

postsRouter.post('/new', async (req, res) => {
    const { title, text } = req.body;
    const { name } = req.headers;
    const date = Date.now().toString();
    try {
        const post = await Posts.post({ title, text, date, name });
        res
            .status(201)
            .json({ title, text, date, id: post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

postsRouter.get('/', async (_, res) => {
    try {
        const posts = await Posts.getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

postsRouter.post('/comment', async (req, res) => {
    const { post_id, content, name } = req.body;
    const date = Date.now().toString();
    try {
        const comment = Posts.addComment({ post_id, content, name, date });
        res
            .status(201)
            .json({ post_id, content, name, date, id: comment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

module.exports = postsRouter;
