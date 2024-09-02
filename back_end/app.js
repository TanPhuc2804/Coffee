const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

dotenv.config()
const PORT = process.env.PORT || 4000

const loginRouter = require('./router/loginRouter')
const registerRouter = require('./router/registerRouter')


mongoose.connect(process.env.STRING_MONGO)
    .then(() => {
        console.log('Connected for MongoDB');
    })


app.listen(PORT, () => {
    console.log('Listening to port ' + PORT);
})

app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
// router

app.use('/user', registerRouter )
app.use('/user', loginRouter )



app.get("/", (req, res) => {
    console.log(req.headers.cookie);
    
    res.send("Hello ")
})