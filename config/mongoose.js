const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost/TODOWebApp_development',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// connection made
const db = mongoose.connection;
// on succesfull connection callback function if there is the error
db.on('error', console.error.bind(console, "Error connecting to MongoDB"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
// export
module.exports = db;