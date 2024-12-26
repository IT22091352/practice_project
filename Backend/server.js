const express = require('express');
const mongoose = require('mongoose');


const app = express();

//middleware
app.use("/",(req,res,next) => {
    res.send("It's working");
})

//calling mongoose
mongoose.connect("mongodb+srv://practice_project:Xy92f8aW9ZhTMxLt@cluster0.uaa4e5k.mongodb.net/")
.then(()=> console.log("Connected to database"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));