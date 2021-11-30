// including mongoose
const mongoose =require('mongoose');
// defining the schema with four keys and the values type
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    taskdescription:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
});
// making and exporting the schema
const TaskTodo = mongoose.model('TaskTodo', taskSchema);
// again exporting for use by the controllers and index.js
module.exports = TaskTodo;