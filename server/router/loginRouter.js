const express = require('express')
const loginRouter = express.Router()
const {loginUserController , logoutController} = require('../controller/loginController')
const {verifyUser} = require('../middleware/auth')
loginRouter.get('/login',async(req,res)=>{
    res.send("Login")
})

loginRouter.post('/login',loginUserController)
loginRouter.get('/logout',logoutController)
loginRouter.get('/verify',verifyUser,(req,res)=>{
    res.json({login:true,role:req.role})
})
module.exports = loginRouter
