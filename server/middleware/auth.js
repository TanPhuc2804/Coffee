const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()


const verifyAdmin =(req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message:"Invalid token"})
    }
    jwt.verify(token,process.env.SECRET_KEY_ADMIN,(err,decoded)=>{
        if(err){
            return res.json({message:"Unauthorized"})
        }
        req.userID = decode.userID;
        req.role = decode.role
        next()
    })

}

const verifyUser = (req,res, next) =>{
    const token = req.cookies.token
    if(!token)
        return res.json({message:"Invalid token"})
    jwt.verify(token,process.env.SECRET_KEY_ADMIN,(err,decoded)=>{
        if(err){
            jwt.verify(token,process.env.SECRET_KEY_USER,(err,decoded)=>{
                if(err){
                    return res.json({message:"Invalid token"})
                }else{
                    req.userID = decoded.userID,
                    req.role = decoded.role
                    next()
                }
            })
        }else{
            req.userID = decoded.userID,
            req.role = decoded.role
            next()
        }
    })
}


module.exports = {verifyUser}