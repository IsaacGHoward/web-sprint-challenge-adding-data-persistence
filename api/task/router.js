// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      tasks.forEach(task => {
        task.task_completed === 1 ? task.task_completed = true : task.task_completed = false;
      });
      res.json(tasks)
    })
})

router.post('/', (req,res) => {
  Tasks.addTask(req.body)
    .then(task => {
      //task.task_completed === 1 ? task.task_completed = true : task.task_completed = false;
      //res.json(task);
      res.send({...task[0], task_completed: task[0].task_completed === 1 ? true : false})
    })
});

module.exports = router;