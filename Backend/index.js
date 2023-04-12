const express = require('express')
var cors = require('cors')
const bodyparser = require('body-parser')

const app = express()
app.use(cors())
app.use("/images", express.static("images"));
const port = 3001

const connectToDB = require('./db')
connectToDB()

app.use(bodyparser.json())
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/auth',require('./routes/auth'))
app.use('/auth',require('./routes/login'))
app.use('/auth',require('./routes/getusers'))
app.use('/addproducts',require('./routes/addProducts'))
app.use('/getproducts',require('./routes/getProducts'))
app.use('/addneonsigns',require('./routes/addneonSigns'))
app.use('/getneonsigns',require('./routes/getneonSigns'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))