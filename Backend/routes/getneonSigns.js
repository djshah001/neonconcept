const neonDropDown = require('../models/NeonDropdown')

const express = require('express');
const router = express.Router()


router.get('/',
async (req,res) => {

    const neonSigns = await neonDropDown.find()
    res.send(neonSigns)
})

module.exports = router
