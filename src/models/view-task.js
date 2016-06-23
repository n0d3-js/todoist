/* eslint-disable no-underscore-dangle */
import moment from 'moment';

function ViewTask(task, priorities) {
  this.id = task._id;
  this.name = task.name;
  this.due = moment(task.due).format('YYYY-MM-DD');
  this.priority = priorities.find(p => p.value === task.priority);
  this.category = task.category;
  this.isComplete = task.isComplete;
  this.createdAt = moment(task.createdAt).format('YYYY-MM-DD');
}

module.exports = ViewTask;
