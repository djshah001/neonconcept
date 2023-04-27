const productsCategory  = require('../../models/Productcategories');
const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post('/updateproductcategory',[
    body('title')
    .isLength({ min: 1 })
    .withMessage('Title cannot be empty')
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }

    const id = req.body.id

    try {
        const p = await productsCategory.findByIdAndUpdate(id,{
            title: req.body.title,
            active:req.body.active
          })
    
        res.json({msg:`Product Category Updated`})
    } 
    catch (error) {
        res.send({errors : [{msg:`error occured`}]})
    }


})

module.exports = router
