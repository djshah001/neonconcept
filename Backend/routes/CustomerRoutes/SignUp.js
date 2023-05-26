const Customer = require('../../models/Customer')
const express = require('express');
const router = express.Router()
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const multer = require('multer')
const { upload, date, time } = require('../../middleware/imageUploader')

const jwt_secret = 'darshanShah'


router.post('/signup',
    // upload.single('image'),
    [
        check('firstName')
            .matches(/^[a-zA-Z ]+$/)
            .withMessage('First Name can only contain alphabets and spaces')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters long'),
        check('lastName')
            .matches(/^[a-zA-Z ]+$/)
            .withMessage('Last Name can only contain alphabets and spaces')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters long'),

        check('email', 'Enter a valid email').isEmail(),

        check('contactNumber', 'Enter a valid contact Number').isNumeric(),

        check('password', 'Length of password must be at least 8')
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }

        const emailexist = await Customer.findOne({ email: req.body.email }).exec()
        const contactexist = await Customer.findOne({ email: req.body.email }).exec()
        const profilePic = req.file ? `${req.file.originalname}-${time}-${date}.${req.file.mimetype.split("/")[1]}` : `OIP.jpeg`;


        try {
            if (emailexist) {
                res.send({ errors: [{ msg: 'Email already exist' }] })
            }
            else if (contactexist) {
                res.send({ errors: [{ msg: 'Contact already exist' }] })
            }
            else {

                console.log(req.body)
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);

                const customer = await Customer.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    contactNumber: req.body.contactNumber,
                    password: hash,
                    profilePic: profilePic,
                })

                const data = {
                    customer: {
                        id: customer.id,
                    }
                }

                const authToken = jwt.sign(data, jwt_secret);

                res.json({errors:false,authToken: authToken , msg:`User Created` })
                console.log('user added to db')
            }

        } catch (error) {
            console.error(errors.massage)
            res.status(500).send('error occured')
        }

    })

module.exports = router