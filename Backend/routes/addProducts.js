const Products = require('../models/Products')
const express = require('express');
const router = express.Router()
const { body, validationResult } = require('express-validator');


router.post('/',[
    body('title','Enter a valid title').isLength({ min: 2 }),
    body('description','Enter a valid description'),
    body('imgurl','Enter a valid imgurl'),
    body('offerPrice','Enter a valid price').isNumeric(),
    body('originalPrice','Enter a valid price').isNumeric(),
],

async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const products = await Products.create({
        title: req.body.title,
        description: req.body.description,
        imgurl: req.body.imgurl,
        offerPrice:req.body.offerPrice,
        originalPrice:req.body.originalPrice
      })

      res.json({ products: products})


})

module.exports = router
