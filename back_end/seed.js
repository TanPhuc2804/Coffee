const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const adminModel = require('./models/adminModel')
const Connection = require('./db')

Connection()
async function CreateAdmin(){
    try{
        const adminCount = await adminModel.countDocuments({})
        console.log(adminCount)
        if(adminCount===0){
           const password = await bcrypt.hash("admin123",10)

           const newAdmin = new adminModel({
                email:'admin@gmail.com',
                name:"Admin",
                password: password,
                role:"admin"
           })

           await newAdmin.save()
           console.log("Account created")
        }else{
            console.log("Account already existed")
        }

    }catch(err){
        console.log(err)
    }

}

CreateAdmin()