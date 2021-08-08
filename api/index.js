const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/posts', require('./posts'));
server.use(require('./auth'));

server.get('/', (req, res) => {
    res.status(200).json({ message: 'It works' });
});

module.exports = server;
