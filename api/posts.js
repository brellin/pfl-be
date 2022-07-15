const { compareSync } = require('bcrypt');
const postsRouter = require('express').Router();
const Posts = require('../data/helpers').posts;
const Auth = require('../data/helpers').auth;

// get functions
postsRouter.get('/', async (_, res) => {
    try {
        const posts = await Posts.getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

postsRouter.get('/category/:cat', async (req, res) => {
    const { cat } = req.params;

    try {
        const posts = await Posts.getAllPostsByCategory(cat);
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

postsRouter.get('/categories', async (_, res) => {
    try {
        const cats = await Posts.getAllCategories();
        res.status(200).json(cats);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

postsRouter.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Posts.getOnePost(id);
        res.status(200).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
});

// post functions
postsRouter.post('/new', async (req, res) => {
    const { title, text, category } = req.body;
    const { name } = req.headers;
    const date = Date.now().toString();
    try {
        const post = await Posts.post({ title, text, date, name, category });
        console.log(post);
        res
            .status(201)
            .json({ title, text, date, category, id: post });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

// put functions
postsRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, text, date, name, category } = req.body;

    const updates = { title, text, date, name, category, edited: Date.now().toString() };

    try {
        const updated = await Posts.updatePost(id, updates);
        res.status(201).json(updated);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

// delete functions
postsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { password, name } = req.headers;

    try {
        const { proof } = await Auth.verify(name);
        const isMe = compareSync(password, proof);

        if (isMe) {
            await Posts.deletePost(id);
            res.status(200).json({ message: `deleted post ${ id }` });
        }
        else res.status(401).json({ message: "You're not me." });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = postsRouter;
