const mongoose = require('mongoose'),
Task = mongoose.model('Task'),
Tasks = require('../controllers/tasks')

module.exports = function(app){
  app.get('/tasks', Tasks.index);
  app.get('/tasks/:id/', Tasks.getOne);
  app.post('/tasks', Tasks.create);
  app.put('/tasks/:id/', Tasks.update);
  app.delete('/tasks/:id/', Tasks.delete);
}
