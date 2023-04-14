const express = require('express');
const router = express.Router()
const User = require('../models/User')


router.post('/deleteuserbyid',
async (req,res) => {
    try {
        const userId = req.body.userId
        const user = await User.deleteOne({_id:userId})
        if(user) {
            res.send('User Deleted')
        }
        else{
            res.send('error')
        }
    } catch (error) {
        res.send('error: ' + error)
    }
})

module.exports = router