const Product = require('../../models/Products')
const express = require('express');
const router = express.Router()


router.post('/getproduct',
async (req,res) => {
    const Id = req.body.id
    if (Id) {
        const product = await Product.findById(Id)
        res.send(product)
    }
    else{
        res.send({errors : [{msg:`no Product of ${Id}`}]})
    }

})

module.exports = router