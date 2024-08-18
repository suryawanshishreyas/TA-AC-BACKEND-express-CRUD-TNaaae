// require setup
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

// connecting to db
mongoose.connect('mongodb://127.0.0.1:27017/userDiary2',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Successfully connected to Database');
}).catch(()=>{
    console.log(`Failed to connect to Database`);
})
// Mounting express app
var app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// setup view engine
app.set("view engine","ejs");
app.set('views',path.join(__dirname,"views"));

// routing middlewares
app.use('/',indexRouter);
app.use('/users',userRouter);

// error handling middlewares
app.use((req,res,next)=>{
    res.send('Page Not Found');
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})