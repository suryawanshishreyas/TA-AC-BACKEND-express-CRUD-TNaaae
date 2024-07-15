var express = require('express');
var mongoose = require('mongoose');
var app = express();
var User = require('./models/user');
const path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/sample3',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(()=>{
    console.log('Connect to Database');
}).catch(()=>{
    console.log('Failed to connect to Database');
})


app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

// Routes


app.get('/',async(req,res)=>{
    res.render('index.ejs',{name:'Madgametrix', age:'27'});
})

app.get('/about', async(req,res)=>{
    var about = {name: "Kalki"}
    await res.render('about.ejs', {about : about})
})

app.use((req,res,next)=>{
    res.status(500).send('Page not found');
    next();
})
app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})