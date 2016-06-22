/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('tasks/index');
});

router.get('/new', (req, res) => {
  res.render('tasks/new');
});

router.post('/', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:id/complete', (req, res) => {
  res.redirect('/tasks');
});

router.post('/:id/delete', (req, res) => {
  res.redirect('/tasks');
});

router.get('/:id/edit', (req, res) => {
  res.render('tasks/new');
});

router.post('/:id', (req, res) => {
  res.redirect('/tasks');
});
