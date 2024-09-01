const express = require('express')
const loginRouter = express.Router()
const {loginUserController} = require('../controller/loginController')

loginRouter.get('/login',async(req,res)=>{
    res.send("Login")
})

loginRouter.post('/login',loginUserController)
module.exports = loginRouter
