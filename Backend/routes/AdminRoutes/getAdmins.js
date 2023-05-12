const express = require('express');
const User = require('../../models/User')
const router = express.Router()

router.get('/getadmins',
async (req,res) => {
    const users = await User.find().exec()
    res.json(users)
})

module.exports = router