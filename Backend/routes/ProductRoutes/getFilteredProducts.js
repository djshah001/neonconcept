const express = require('express');
const router = express.Router();
const Product = require('../../models/Products');
const productsCategory = require('../../models/Productcategories');
const { default: mongoose } = require('mongoose');

router.get('/getfilteredproducts', async (req, res) => {
    try {
        const id = req.query.id;
        console.log(id);
        
        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
            return res.send({ errors: [{ msg: 'Invalid Product Category ID' }] });
        }

        const ProductCategory = await productsCategory.findById(id)
        if (!ProductCategory) {
            res.send({ errors: [{ msg: 'No Product Category found' }] });
        }
        
        const query = [
            {
                $match: { ProductCategory: ProductCategory.title }
            },
        ];

        const filteredProducts = await Product.aggregate(query).exec();
        res.send(filteredProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
