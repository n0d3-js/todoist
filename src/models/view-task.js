function ViewTask(task, priorities) {
  this.name = task.name;
  this.due = task.due.toLocaleDateString();
  this.priority = priorities.find(p => p.value === task.priority);
  this.category = task.category;
  this.isComplete = task.isComplete;
  this.createdAt = task.createdAt.toLocaleDateString();
}

module.exports = ViewTask;
