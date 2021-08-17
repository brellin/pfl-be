const { compareSync } = require('bcrypt');
const auth = require('express').Router();
const Auth = require('../data/helpers').auth;

auth.post('/auth', async (req, res) => {
    const { password, name } = req.headers;

    try {
        const { proof } = await Auth.verify(name);
        const isMe = compareSync(password, proof);
        res.status(isMe ? 200 : 400).json({ message: isMe ? 'Welcome, sir. You have been successfully logged in.' : "You're not me! I appreciate the try, though. =D" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = auth;
