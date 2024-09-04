const mongoose = require('mongoose')

const  userSchema= new mongoose.Schema({
    email:{
        type: String,
        require:true
    },
    name: {
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
},{timestamps: true})

const userModel = mongoose.model('User',userSchema)

module.exports =userModel
