//including the schema and mongoose
const Todo = require('../models/taskTodo');
module.exports.home=function(req,res){
//    find all the objects from the db witout any restriction and sending all those task from the list to home.ejs via var todo_list so to append there on the page
    Todo.find({}).sort('-date').exec(function (err, todos) {
        if (err) {
            console.log('error', err);
            return;
        }
        // rendering the page and sending the values of the var which are to sent
        return res.render('home',
            {
                title:"My TODO",
                todo_list:todos
            }
        );
    }); 
}; 