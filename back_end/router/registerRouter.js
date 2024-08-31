const express = require('express')
const registerRouter = express.Router()
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

registerRouter.post('/register',async (req,res)=>{
    const {email,name, password, role} = req.body
    
    if(!email || !name ||!password ||!role ){
        return res.send("User invalid !")
    }

    const userExisted= await userModel.findOne({email: email})
        
    if(userExisted){
        res.status(400).send("User existed")
        return;
    }

    const hashPassword = await bcrypt.hash(password, 12)
    const userInput = new userModel({
        email:email,
        name: name,
        password:hashPassword,
        role:role
    })
  
    userInput.save()
        .then(()=>{
            console.log("save success");
        })
    return res.status(201).send("Register")
})


module.exports = registerRouter

