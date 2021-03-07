// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Projects.getProjects()
    .then(resources => {
      resources.forEach(resource => {
        resource.project_completed === 1 ? resource.project_completed = true : resource.project_completed = false;
      });
      res.json(resources)
    })
})

router.post('/', (req,res) => {
  Projects.addProject(req.body)
    .then(resource => {
      resource.project_completed === 1 ? resource.project_completed = true : resource.project_completed = false;
      res.json(resource);
    })
});

module.exports = router;