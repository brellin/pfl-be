const commentsRouter = require('express').Router();
const Comments = require('../data/helpers').comments;

commentsRouter.post('/new', async (req, res) => {
    const { post_id, content, name } = req.body;
    const date = Date.now().toString();
    try {
        const comment = Comments.addComment({ post_id, content, name, date });
        res
            .status(201)
            .json({ post_id, content, name, date, id: comment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

module.exports = commentsRouter;
