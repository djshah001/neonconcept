const Banner = require('../../models/Banner')
const express = require('express');
const router = express.Router()


router.post('/getbannerbyid',
async (req,res) => {
    const bannerId = req.body.id
    if (bannerId) {
        const banners = await Banner.findById(bannerId)
        res.send(banners)
    }
    else{
        res.send({errors : [{msg:`no banner of ${bannerId}`}]})
    }

})

module.exports = router