const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/index.js');
const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api', router);

export default app;