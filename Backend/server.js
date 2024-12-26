const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/BusRutes'); 

const app = express();
const cors = require('cors');

//middleware
app.use(cors());
app.use(express.json()); //postman eken send krna data tika renposive wenna hdna eka
app.use("/Buses",router);


//calling mongoose
mongoose.connect("mongodb+srv://practice_project:Xy92f8aW9ZhTMxLt@cluster0.uaa4e5k.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log((err)));