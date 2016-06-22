/* eslint-disable new-cap */

import express from 'express';
import Priority from '../models/priority';
import Category from '../models/category';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('tasks/index');
});

router.get('/new', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  res.render('tasks/new', { priorities, categories });
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
