const express = require('express');
const User = require('../models/User')
const router = express.Router()

router.get('/getusers',
async (req,res) => {
    const users = await User.find().exec()
    // console.log(users)
    res.json(users)

})

module.exports = router