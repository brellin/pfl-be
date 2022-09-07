const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/posts', require('./posts'));
app.use('/comments', require('./comments'));
app.use('/rentals', require('./rentals'));
app.use(require('./auth'));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'It works' });
});

module.exports = app;
