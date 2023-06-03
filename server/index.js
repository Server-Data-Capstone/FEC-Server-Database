require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/reviews.js');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/reviews', router);
module.exports = app;


// const PORT = process.env.EXPRESS_PORT || 3001;

// app.listen(PORT);
// console.log(`Server listening at port:${PORT}`);

