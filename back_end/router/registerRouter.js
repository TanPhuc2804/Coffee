const express = require('express')
const registerRouter = express.Router()
const registerUser = require('../controller/registerController.js')

registerRouter.post('/register',registerUser)
registerRouter.get('/register',(req,res)=>{
    res.send("register")
})

module.exports = registerRouter

