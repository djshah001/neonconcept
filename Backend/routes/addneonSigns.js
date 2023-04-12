const neonDropDown = require('../models/NeonDropdown')
const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const { default: mongoose } = require("mongoose");



router.post('/',[
    body('title','Enter a valid title').isLength({ min: 2 }),
],

async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }


    const titleExist = await neonDropDown.findOne({title:req.body.title}).exec()


    if(titleExist){
        res.send('title already exists')
    }
    else{

        const neonSigns = await neonDropDown.create({
            title: req.body.title,
            description: req.body.description,
          })
    
        res.json({ neonSigns: neonSigns})
    }


})

module.exports = router
