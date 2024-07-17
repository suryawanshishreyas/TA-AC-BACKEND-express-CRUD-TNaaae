var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var usersRouter = require('./routes/usersRouter');
var User = require('./models/users');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/userDiary')
.then(()=>{
    console.log(`Successfully connected to Database`);
})
.catch(()=>{
    console.log(`Failed to connect to Database`);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get('/',async(req,res)=>{
    await res.render('home');
})

app.use('/users', usersRouter);

app.use((req,res,next)=>{
    res.status(500).send('Page Not Found');
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})