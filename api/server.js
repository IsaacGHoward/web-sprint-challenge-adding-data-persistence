// build your server here and require it from index.js
const express = require('express');

const ResourcesReouter = require('./resource/router');

const server = express();

server.use(express.json());
server.use('/api/resources', ResourcesReouter);

module.exports = server;