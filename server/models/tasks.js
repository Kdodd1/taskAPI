const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Name is required"]},
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false },
  }, {timestamps: true});

mongoose.model('Task', TaskSchema);