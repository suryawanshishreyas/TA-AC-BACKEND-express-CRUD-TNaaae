var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

mongoose.connect('mongodb://127.0.0.1:27017/userSpace',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Successfully connected to Database');
}).catch(()=>{
    console.log(`Failed to connect to Database`);
})

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "views"));

app.use('/',indexRouter);
app.use('/user',userRouter);

app.use((req,res,next)=>{
    res.send('Page not found');
})

app.use((err,req,res,next)=>{
    res.send(err);
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})