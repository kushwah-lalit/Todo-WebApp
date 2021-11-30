//including the schema and mongoose
const Todo = require('../models/taskTodo');
module.exports.newtask=function(req,res){
//    creates the object in Todo db with the values from the request
    Todo.create({
        title: req.body.title,
        taskdescription: req.body.taskdescription,
        category: req.body.category,
        date: req.body.date
    }, function (err, newtodo) {
        // callback function
        if (err) {
            console.log('error in creating task', err);
            return;
        }
        // redirect to the same page with fresh data
        return res.redirect('back');
    }
    );
}; 