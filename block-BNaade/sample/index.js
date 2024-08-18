const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

// app.get('/',(req,res)=>{
//     res.send("Hello")
// })

app.use(cookieParser())
app.use(express.static('public'))

app.set('view engine', 'ejs')


app.listen(3000,()=>{
    console.log('App is listening on port 3000');
})