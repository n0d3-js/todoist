/* eslint-disable new-cap, array-callback-return, no-param-reassign */

import express from 'express';
import Priority from '../models/priority';
import Category from '../models/category';
import Task from '../models/task';
import ViewTask from '../models/view-task';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Task.find((err, tasks) => {
    const priorities = Priority.find();
    const viewTasks = tasks.map(t => new ViewTask(t, priorities));
    res.render('tasks/index', { viewTasks });
  });
});

router.get('/new', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  res.render('tasks/new', { priorities, categories });
});

router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save(() => {
    res.redirect('/tasks');
  });
});

router.post('/:id/complete', (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    task.update({ isComplete: !task.isComplete }, () => {
      res.redirect('/tasks');
    });
  });
});

router.post('/:id/delete', (req, res) => {
  Task.findByIdAndRemove(req.params.id, () => {
    res.redirect('/tasks');
  });
});

router.get('/:id/edit', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  Task.findById(req.params.id, (err, task) => {
    const viewTask = new ViewTask(task, priorities);
    res.render('tasks/new', { task: viewTask, priorities, categories });
  });
});

router.post('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/tasks');
  });
});
