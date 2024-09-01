const {generationAccessToken,generationRefreshToken} = require('../services/jwt')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')



const loginUserController = async function (req,res){
    // check user existed
    const {email, password} = req.body

    const userExsisted = await userModel.findOne({email: email})
    if(!userExsisted){
        return res.status(401).json({login:false,role:'undefined',message:'Invalid user'})
    }
    const passCheck = await bcrypt.compare(password,userExsisted.password)
    if(!passCheck){
        return res.status(400).json({login:false,role:'undefined',message:'Incorret password'})
    }
    
    // create token with jwt
    const token = generationAccessToken({
        userID: userExsisted._id,
        role: userExsisted.role
    })
   
    return res.cookie('token',token,{httpOnly:true,secure:true}).json({login:true, role:`${userExsisted.role}`})
}

module.exports = {loginUserController}