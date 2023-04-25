const productsCategory  = require('../../models/Productcategories');
const express = require('express');
const router = express.Router()


router.get('/getproductcategories',
async (req,res) => {

    const Productcategories = await productsCategory.find()
    res.send(Productcategories)

})

module.exports = router
