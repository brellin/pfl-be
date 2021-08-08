const { compareSync } = require('bcrypt');
const auth = require('express').Router();
const { verify } = require('../data/helpers');

auth.post('/auth', async (req, res) => {
    const { password } = req.headers;
    try {

        const userOnFile = await verify(req.headers.name);
        const isMe = compareSync(password, userOnFile.proof);
        console.log(isMe);
        res.status(isMe ? 200 : 400).json({ message: isMe ? 'Hi.' : 'Nah.' });

    } catch (err) {

        res.status(404).json({ message: "You're not me! I appreciate the try, though. =D" });

    }
});

module.exports = auth;
