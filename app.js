const express = require('express')
const app = express()
import { url } from './mongodburl'

const mongoose = require("mongoose")
const port = 3000

const mongooseurl= url

mongoose.connect(mongooseurl)

mongoose
    .connect(mongooseurl)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((e) =>{
        consolelog(e);
    });
require('./UserDetails')

const User =mongoose.model("UserInfo")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/register", async (req,  res) =>{
    const {name, email,mobile, password,} = req.body;
    const oldUser = await User.findOne({ email: email})

    if(olduser){
        await User.findOne({email: email});
    }
    try{
        await User.create({
            name:name,
            email:email,
            mobile,
            password,
        });
        res.send({status: "ok", data: "User Created"});
        }catch(error){
        res.send({status: "error", data: "error" })
    }
    

    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
