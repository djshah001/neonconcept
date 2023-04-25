const express = require('express');
const router = express.Router()
const productsCategory  = require('../../models/Productcategories');

router.post('/deleteproductcategory',
async (req,res) => {
    try {
        const Id = req.body.id
        const productcategory = await productsCategory.deleteOne({_id:Id})
        if(productcategory) {
            res.json({msg:`Product Category Deleted`})
        }
        else{
            res.send({errors : [{msg:`error occured`}]})
        }
    } catch (error) {
        res.send('error: ' + error)
    }
})

module.exports = router