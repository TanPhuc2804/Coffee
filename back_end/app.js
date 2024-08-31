const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
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
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))

// router

app.use('/user', registerRouter )
app.use('/user', loginRouter )



app.get("/", (req, res) => {
    res.send("Hello")
})