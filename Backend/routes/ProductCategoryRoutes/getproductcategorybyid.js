const productsCategory  = require('../../models/Productcategories');
const express = require('express');
const router = express.Router()


router.post('/getproductcategorybyid',
async (req,res) => {
    const Id = req.body.id
    if (Id) {
        const productscategory = await productsCategory.findById(Id)
        res.send(productscategory)
    }
    else{
        res.send({errors : [{msg:`no banner of ${Id}`}]})
    }

})

module.exports = router