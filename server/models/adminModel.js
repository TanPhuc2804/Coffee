const mongoose =require('mongoose');

const adminSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
},{timestamps:true})

const adminModel = mongoose.model('admin',adminSchema)
module.exports = adminModel