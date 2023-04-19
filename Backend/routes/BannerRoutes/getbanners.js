const Banner = require('../../models/Banner')
const express = require('express');
const router = express.Router()


router.get('/getbanners',
async (req,res) => {

    const banners = await Banner.find()
    res.send(banners)

})

module.exports = router
