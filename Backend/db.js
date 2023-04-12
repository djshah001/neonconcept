require('dotenv').config()
const { default: mongoose } = require("mongoose");


const connectToDB = ()=> {
    console.log(process.env.DATABASE_URL)
    mongoose.connect(process.env.DATABASE_URL).then(()=> {
        console.log('connected to mongo')
    })
}

module.exports = connectToDB