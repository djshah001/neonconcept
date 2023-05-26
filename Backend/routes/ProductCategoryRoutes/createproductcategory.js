const productsCategory  = require('../../models/Productcategories');
const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post('/createproductcategory',[
    body('title')
    .isLength({ min: 1 })
    .withMessage('Title cannot be empty')
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }


    const titleExist = await productsCategory.findOne({title:req.body.title}).exec()


    if(titleExist){
        res.json({errors : [{msg:`Title already exists: ${req.body.title}`}]})
    }
    else{

        await productsCategory.create({
            title: req.body.title, 
            topTitle: req.body.topTitle, 
            heading: req.body.heading, 
            description: req.body.description, 
            active:req.body.active
          })
    
          res.json({msg:`New Product Category Created`})
    }


})

module.exports = router
