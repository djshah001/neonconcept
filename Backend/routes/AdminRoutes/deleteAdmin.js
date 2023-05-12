const express = require('express');
const router = express.Router()
const User = require('../../models/User')


router.post('/deleteadmin',
    async (req, res) => {
        try {
            const userId = req.body.userId
            const user = await User.deleteOne({ _id: userId })
            if (user) {
                res.json({ msg: `User Deleted` })
            }
            else {
                res.json({ errors: [{ msg: `User Not Found` }] })
            }
        } catch (error) {
            res.json({ errors: [{ msg: `error occured` }] })
        }
    })

module.exports = router