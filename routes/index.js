// including the express to handel the request via router
const express = require('express');
// running the router
const router = express.Router();
// including or importing the controller files for the different requests
const homeController = require('../controllers/home_controller');
const addtask =require('../controllers/add_task');
const delselect =require('../controllers/delete_selected');
const delsingle =require('../controllers/delete_single');
console.log('Router file working');
// using the middleware to modify the data of the form to json object for adding to the database
// app.use(express.urlencoded({extended: true})); 
// request to render the homepage
router.get('/',homeController.home);
// request to add the task to the list and db
router.post('/create-task',addtask.newtask);
// request to delete the selected task on one click of delete tasks btn
router.post('/delete-selected',delselect.removedselect);
// request to directly delete the specifc task without the checkbox click
router.get('/delete-single-task',delsingle.removedsingle);
// export the router to the index.js
module.exports=router;
