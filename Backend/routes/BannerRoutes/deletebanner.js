const express = require('express');
const router = express.Router()
const Banner = require('../../models/Banner')


router.post('/deletebanner',
async (req,res) => {
    try {
        const BannerId = req.body.id
        const user = await Banner.deleteOne({_id:BannerId})
        if(user) {
            res.send('Banner Deleted')
        }
        else{
            res.send('error')
        }
    } catch (error) {
        res.send('error: ' + error)
    }
})

module.exports = router