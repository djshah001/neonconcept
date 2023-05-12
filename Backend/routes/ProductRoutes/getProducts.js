const Products = require('../../models/Products')
const express = require('express');
const router = express.Router()


router.get('/getproducts',
async (req,res) => {

    const products = await Products.find()
    console.log('hi')
    console.log(products)
    res.send(products)

})

module.exports = router
