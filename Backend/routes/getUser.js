const express = require('express');
const router = express.Router()
const User = require('../models/User')
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const jwt_secret = 'darshanShah'


router.post('/getuser',fetchUser,
async (req,res) => {
    const userId = req.userId
    const user = await User.findById(userId)
    res.send(user)
})

module.exports = router