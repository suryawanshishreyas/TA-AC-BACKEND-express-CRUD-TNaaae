var express = require('express')
var User = require('../models/user')
var router = express.Router();

router.get('/',async(req,res)=>{
    const user = User.find({name:"Table1"},'name age email');
    console.log(user)
    await res.send(JSON.stringify(user))
})

router.get('/form',async(req,res)=>{
   await res.render('userform');
})

router.post('/form', async(req,res)=>{
    var user = User.create(req.body)
    await res.render('index')
})

module.exports = router;