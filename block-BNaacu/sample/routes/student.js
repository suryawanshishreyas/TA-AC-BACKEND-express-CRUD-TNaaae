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
        res.send('<h2>Form submitted successfully</h2>');
    }
    catch(err){
        res.status(500).send(err);
    }
})


router.get('/',async(req,res)=>{
    res.render("list", { list: ["Shreyas", "Rohan", "Pavan", "Jay"] });
})

router.get('/:id', async(req,res)=>{
    res.render("studentDetail", {
        student: { name: "rahul", email: "rahul@abc.io" },
      });
})

module.exports = router;