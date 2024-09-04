const { generationAccessToken, generationRefreshToken } = require('../services/jwt')
const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')
const adminModel = require('../models/adminModel')


const loginUserController = async function (req, res) {
    // check user existed
    const { email, password } = req.body
    console.log(req.body);
    //user
    const userLogin = await userModel.findOne({ email: email })
    if (userLogin) {
        const incoretPass = await bcrypt.compare(password, userLogin.password)
        if (!incoretPass) {
            return res.status(401).json({ message: "Password is incorred" })
        }

        // create token with jwt
        const token = generationAccessToken({
            userID: userLogin._id,
            role: userLogin.role
        })
        return res.cookie('token', token, { httpOnly: true, secure: true }).json({ login: true, role: `${userLogin.role}` })
    }

    //admin
    const adminLogin = await adminModel.findOne({ email: email })
    if (adminLogin) {
        const incoretPass = await bcrypt.compare(password,adminLogin.password)
        if(!incoretPass){
            return res.status(401).json({ message: "Password is incorred" })
        }

        const token = generationAccessToken({
            userID:adminLogin._id,
            role:adminLogin.role
        })
        return res.cookie('token',token,{httpOnly:true,secure:true}).json({login:true,role:`${adminLogin.role}`})
    }
}

const logoutController = function(req,res){
    res.clearCookie('token')
    return res.json({logout:true })
}

module.exports = { loginUserController,logoutController }