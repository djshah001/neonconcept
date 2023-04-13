const express = require('express');
const router = express.Router()
const User = require('../models/User')
const fetchUser = require('../middleware/fetchUser');


router.post('/getuser',fetchUser,
async (req,res) => {
    const userId = req.userId
    const user = await User.findById(userId)
    res.send(user)
})

module.exports = router