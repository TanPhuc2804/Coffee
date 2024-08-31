const express = require('express')
const loginRouter = express.Router()

loginRouter.get('/login',async(req,res)=>{
    res.send("Login")
})

loginRouter.post('/login',async(req,res)=>{
    res.send("Login")
})
module.exports = loginRouter
