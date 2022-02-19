const cors = require('cors')
const express = require('express')
const auth = require("./routes/auth.js")
const bodyParser = require('body-parser')


const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use("/auth", auth.router)

 

app.get('/dashboard', auth.authenticateJWT, (req, res) => {
    res.json({ "are in?": true })
})

app.get('*', (req, res) => {
    res.sendStatus(404)
})

app.listen(5000, () => {
    console.log("http://localhost:5000")
})
