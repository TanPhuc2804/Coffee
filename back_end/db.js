const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const Connection = async()=>{
    try{
        mongoose.connect(process.env.STRING_MONGO)
        console.log("Conected")
    }catch(err){
        console.log(err)
    }

}


Connection()
module.exports = Connection