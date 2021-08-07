const posts = require('express').Router();
const Posts = require('../data/helpers');

posts.post('/new', async (req, res) => {
    const { title, text } = req.body;
    try {
        const post = await Posts.post({ title, text, date: new Date.now() });
        res.status(201).json({
            title,
            text,
            date,
            id: post
        });
    } catch (err) {
        res.status(500).send(err));
    }
});

module.exports = posts;
