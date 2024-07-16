var express = require('express');
const Student = require('../models/Student');
var router = express.Router();

router.get('/new',(req,res)=>{
    res.render('about');
})

router.post('/',async(req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
})

router.get('/',async(req,res)=>{
    try{
        const student = await Student.find();
        await res.send(student);
    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;