const jwt = require('jsonwebtoken')

function generationAccessToken(user){
    return jwt.sign(user,process.env.SECRET_KEY_USER,{expiresIn:'15m'})
}

function generationRefreshToken(ser){
    return jwt.sign({},process.env.SECRET_KEY_USER,{expiresIn:'7d'})
}

module.exports = {generationAccessToken, generationRefreshToken }
