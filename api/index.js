const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(require('./posts'));

server.get('/', (req, res) => {
    res.status(200).json({ message: 'It works' });
});

module.exports = server;
