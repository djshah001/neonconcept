const Product = require('../../models/Products')
const productsCategory = require('../../models/Productcategories');
const express = require('express');
const router = express.Router()
const { check, validationResult, body } = require('express-validator');
const multer = require('multer')

const currentDate = new Date()
let date = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
let time = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images/products')
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split("/")[1];
        callback(null, `${file.originalname}-${time}-${date}.${ext}`);
    }
})

const upload = multer({ storage: storage })

router.post('/addproduct',
    upload.single('ProductImage'),
    [
        check('ProductCategoryId')
            .exists()
            .withMessage('Product category is required')
            .not()
            .isEmpty()
            .withMessage('Product category is required')
            .isMongoId()
            .withMessage('Invalid product category'),
        check('title')
            .not()
            .isEmpty()
            .withMessage('Product name is required')
            .matches(/^[a-zA-Z ]+$/)
            .withMessage('Product name can only contain alphabets and spaces')
            .isLength({ min: 2 })
            .withMessage('Product name must be at least 2 characters long'),
        check('description')
            .not()
            .isEmpty()
            .withMessage('Product description is required'),
        check('active')
            .not()
            .isEmpty()
            .withMessage('Active status is required')
            .isBoolean()
            .withMessage('Active status should be a boolean value'),
        check('readyToBuy')
            .not()
            .isEmpty()
            .withMessage('Ready to buy status is required')
            .isBoolean()
            .withMessage('Ready to buy status should be a boolean value')
            .custom((value, { req }) => {
                console.log(typeof req.body.offerPrice)
                if (value === true && req.body.offerPrice === 'undefined') {
                    throw new Error('Offer price is required when Ready to buy is true ');
                }
                return true;
            }),
        body('offerPrice')
            .if(body('readyToBuy').equals('true'))
            .not()
            .isEmpty()
            .withMessage('Offer price is required when Ready to buy is true')
            .isNumeric()
            .withMessage('Offer price should be a number')
            .isFloat({ min: 0 })
            .withMessage('Offer price should be a positive number')
            .optional(),
        body('originalPrice')
            .if(body('readyToBuy').equals('true'))
            .not()
            .isEmpty()
            .withMessage('Original price is required when Ready to buy is true')
            .isNumeric()
            .withMessage('Original price should be a number')
            .isFloat({ min: 0 })
            .withMessage('Original price should be a positive number')
            .optional()

    ],
    async (req, res) => {
        const generateFilename = (file) => {
            const ext = file.mimetype.split("/")[1];
            return `${file.originalname}-${time}-${date}.${ext}`;
        };

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.send({ errors: errors.array() });
            }
            else {

                const productExist = await Product.findOne({ title: req.body.title }).exec()

                if (productExist) {
                    return res.status(400).json({ errors: [{ msg: 'Product already exists' }] });
                }
                else {
                    const productImgUrl = req.file ? generateFilename(req.file) : `OIP.jpeg`;
                    const offerPrice = req.body.offerPrice ? req.body.offerPrice : 0
                    const originalPrice = req.body.originalPrice ? req.body.originalPrice : 0

                    const ProductCategory = await productsCategory.findById(req.body.ProductCategoryId)

                    const product = await Product.create({
                        ProductCategoryId: req.body.ProductCategoryId,
                        ProductCategory:ProductCategory.title,
                        title: req.body.title,
                        description: req.body.description,
                        smalldescription: req.body.smalldescription,
                        active: req.body.active,
                        readyToBuy: req.body.readyToBuy,
                        offerPrice: offerPrice,
                        originalPrice: originalPrice,
                        productImgUrl: productImgUrl,
                    })

                    await product.save();

                    res.json({ msg: `Product Added` })
                }
            }


        } catch (error) {
            console.error(error)
            res.status(500).json({ errors: [{ msg: 'Server error' }] });
        }

    })


module.exports = router