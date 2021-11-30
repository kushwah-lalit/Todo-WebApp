//including the schema and mongoose
const Todo = require('../models/taskTodo');
module.exports.removedselect=function(req,res){
    let ids = req.body.task;
    // if single task is to be deleted
    if (typeof(ids) == "string") {
        // finding the object via id form the request and deleting it
        Todo.findByIdAndDelete(ids, function(err) {
            if (err) { 
                console.log("error in deleting"); 
                return; 
            }
        });
    } else {    // if multiple task is to be deleted
        for (let id of ids) {
            // finding the object fro each id from ids list...form the request and deleting it
            Todo.findByIdAndDelete(id, function (err) {
                if (err) { 
                    console.log("error in deleting");
                    return; 
                }
            });
        }
    }
    // redirct back to the same page
    return res.redirect('back');
}; 