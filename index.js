// ************run by npm start*********

    // added select all and deselectall featureto select and deselec all tasks at single click
    // added individual delete btn to all the tasks to delete directly on click
    // added task desciption prop to the task
    // new css styling and layout for the app
// *************************************
//include express
const express = require('express');
// run express
const app = express();
const bodyParser = require('body-parser');
// setting the port
const port = process.env.POST || 8000;
// adding middleware to convert the request data to json object
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
//to access static files
app.use(express.static('./assets'));
//should be before the routes
                // to add if we use layouts
                // const expressLayouts = require('express-ejs-layouts');
// including the odm mongoose
const db = require('./config/mongoose');
                // using layouts
                // app.use(expressLayouts);
                // Putting the styles and scripts from pages to the correct place in the layout file
                // app.set('layout extractStyles', true);
                // app.set('layout extractScripts', true);
// use routes for all types of req
app.use('/',require('./routes/index'));
// setup the view engine 
app.set('view engine', 'ejs');
// setting the path to access the views files
app.set('views', './views');
// running the express
app.listen(port,function(error){
    if(error){
        console.log(`Error occured while running the server: ${port}`);
    }
    console.log(`Server running on port: ${port}`);
});