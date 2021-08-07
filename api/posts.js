const postsRouter = require('express').Router();
const Posts = require('../data/helpers');

postsRouter.post('/new', async (req, res) => {
    const { title, text } = req.body;
    const date = Date.now().toString();
    try {
        const post = await Posts.post({ title, text, date });
        res
            .status(201)
            .json({ title, text, date, id: post });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = postsRouter;
