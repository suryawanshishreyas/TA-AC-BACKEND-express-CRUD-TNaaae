var express = require('express');
const User = require('../models/users');
var mongoose= require('mongoose');
var router = express.Router();

// Getting all users in database

router.get('/',async(req,res)=>{
    const users = await User.find()
    res.render('users',{users});
})

// Getting single user detail by ID

router.get('/search/:id',async(req,res)=>{
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ error: 'Invalid ID format' });
    }
    try{
        var user = await User.findById(id);
        res.render('singleUser', {user});
    }
    catch(err){
        console.log(err);
    }
})

router.get('/form',async(req,res)=>{
    await res.render('userForm');
})

// Form submission

router.post('/form',async(req,res)=>{
    const user = new User(req.body);
    await user.save();
    res.send('<h2>Form submission successful!</h2>');
})

// updating a user
router.put('/:id', async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findByIdAndUpdate(id, req.body, {new:true});
        res.send(`<p>Update Successful with </br> name <b>${user.name}</b> and Email <b>${user.email}</b></p>`);
    }
    catch(err){
        console.log(err);
    }
})

// Deleting a user
router.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(id);
        console.log(req);
        res.send({ message: 'User deleted successfully', user });
    }
    catch(err){
        console.log(err);
        
    }
})


module.exports = router;