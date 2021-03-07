// build your `/api/resources` router here
const express = require('express')
const Resources = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources)
    })
})

router.post('/', (req,res) => {
  Resources.addResource(req.body)
    .then(resource => {
      res.json(resource);
    })
});

module.exports = router;