//including the schema and mongoose
const Todo = require('../models/taskTodo');
module.exports.removedsingle=function(req,res){
    // collecting the id of the task to be deleted
    let id = req.query.Id;
    // searching in the list in db then deleteing it
    Todo.findByIdAndDelete(id,function(err){
        if(err) {
            console.log("error");
            return;
        }
        // redirect back
        return res.redirect('back');
    });
}; 