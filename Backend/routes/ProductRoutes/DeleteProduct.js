const express = require('express');
const router = express.Router()
const Product = require('../../models/Products')

router.post('/deleteproduct',
async (req,res) => {
    try {
        const Id = req.body.id
        const product = await Product.deleteOne({_id:Id})
        if(product) {
            res.json({msg:`Product Deleted`})
        }
        else{
            res.send({errors : [{msg:`error occured`}]})
        }
    } catch (error) {
        res.send({errors : [{msg:`error occured`}]})
    }
})

module.exports = router