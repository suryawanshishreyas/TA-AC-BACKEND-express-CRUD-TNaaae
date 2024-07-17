var express = require('express');
const User = require('../models/user');
var router = express.Router();

router.get('/new',async(req,res)=>{
    await res.render('user');
})

router.get('/',async(req,res)=>{
    await res.send('Form submitted successfully');
})

router.post('/',async(req,res,next)=>{
    const user = new User(req.body);
    await user.save();
    res.redirect('/user');
})

module.exports = router;