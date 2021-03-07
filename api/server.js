// build your server here and require it from index.js
const express = require('express');

const ResourcesReouter = require('./resource/router');
const ProjectsRouter = require('./project/router');

const server = express();

server.use(express.json());
server.use('/api/resources', ResourcesReouter);
server.use('/api/projects', ProjectsRouter);

module.exports = server;