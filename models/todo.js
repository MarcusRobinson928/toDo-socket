var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    todo: {
        type: String,
        trim: true,
        required: "You must include a ToDo"
      },
})

var ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;