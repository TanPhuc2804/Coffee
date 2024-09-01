const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

const registerUser= async (req,res)=>{
    
    const {email,username, password, role} = req.body
    
    if(!email || !username ||!password ||!role ){
        return res.status(204).json({register:"Not found data input"})
    }

    const userExisted= await userModel.findOne({email: email})
        
    if(userExisted){
        res.status(401).json({register:'User existed'})
        return;
    }

    const hashPassword = await bcrypt.hash(password, 12)
    const userInput = new userModel({
        email:email,
        name: username,
        password:hashPassword,
        role:role
    })
  
    userInput.save()
        .then(()=>{
            console.log("save success");
        })
    return res.status(201).json({register:true})
}

module.exports = registerUser