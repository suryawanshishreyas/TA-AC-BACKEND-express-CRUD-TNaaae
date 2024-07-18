var express = require('express');
const User = require('../models/users');
var router = express.Router();

router.get('/',async(req,res)=>{
    const user = User.find({name:"Table1"},'name age email');
    console.log(user);
    res.send(JSON.stringify(user));
})

router.get('/form', async(req,res)=>{
    await res.render('userform');
})

router.post('/form', async(req,res)=>{
    var user = User.create(req.body)
    await res.render('index');
})

// router.get('/:id', async(req,res,next)=>{
//     var id = req.params.id;
//     const user = await User.findById(id);
//     res.render('user',{userOne:user});
//     next();
// })

module.exports = router;