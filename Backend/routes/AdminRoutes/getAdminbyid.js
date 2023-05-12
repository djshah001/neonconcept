const express = require('express');
const User = require('../../models/User')
const router = express.Router()
var bcrypt = require('bcryptjs');


router.post('/getadminbyid',
async (req,res) => {
    const userId = req.body.id
    if(!userId){
        res.send('enter id')
    }
    else{
        const user = await User.findById(userId)
        // const matchPassword = await bcrypt.compareSync(user.password,userCred.password)
        res.send(user)
    }
})

module.exports = router