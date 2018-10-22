const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const database = require('./models/index');
const eventRouter = require('./routes/events');
const policyRouter = require('./routes/policies');
const actorRouter = require('./routes/actors');
const commandRouter = require('./routes/commands');

var app = express();
app.options('*', cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/events', eventRouter);
app.use('/policies', policyRouter);
app.use('/actors', actorRouter);
app.use('/commands', commandRouter);

module.exports = app;
