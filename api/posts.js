const posts = require('express').Router();
const Posts = require('../data/helpers');

posts.post('/new', async (req, res) => {
    const { title, text } = req.body;
    console.log('title + text ' + title + ' ' + text);
    try {
        const post = await Posts.post({ title, text, date: new Date.now() });
        console.log('post ' + post);
        res.status(201).json({
            title,
            text,
            date,
            id: post
        });
    } catch (err) {
        res.status(400).json({ ...err, data: err.data });
    }
});

module.exports = posts;
