var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var studentRouter = require('./routes/student');

var app = express();

mongoose.connect('mongodb://127.0.0.1:27017/sample3'
).then(()=>{
    console.log(`Successfully Connected to Database`);
}).catch(()=>{
    console.log(`Failed to connect to Database`);
})

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// setup view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routing middlewares
app.use('/',indexRouter);
app.use('/students',studentRouter);

// error handling middleware
app.use((req,res,next)=>{
    res.send('Page not found');
    next();
})

app.listen(3000,()=>{
    console.log(`Server is listening to port 3000`);
})