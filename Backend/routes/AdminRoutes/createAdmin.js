const User = require('../../models/User')
const express = require('express');
const router = express.Router()
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const multer = require('multer')

const jwt_secret = 'darshanShah'
const currentDate = new Date()
let date = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
let time = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images/profilePic')
    },
    filename: (req, file, callback) => {
        console.log({ 'file': file })
        const ext = file.mimetype.split("/")[1];
        callback(null, `${file.originalname}-${time}-${date}.${ext}`);
    }
})

const upload = multer({ storage: storage })

router.post('/createadmin',
    upload.single('image'),
    [
        check('name')
            .matches(/^[a-zA-Z ]+$/)
            .withMessage('Name can only contain alphabets and spaces')
            .isLength({ min: 2 })
            .withMessage('Name must be at least 2 characters long'),

        check('email', 'Enter a valid email').isEmail(),

        check('password', 'Length of password must be at least 8')
            .isLength({ min: 8 })
            .withMessage('Password must be at least 8 characters long'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send({ errors: errors.array() });
        }

        const emailexist = await User.findOne({ email: req.body.email }).exec()
        const profilePic = req.file ? `${req.file.originalname}-${time}-${date}.${req.file.mimetype.split("/")[1]}` : `OIP.jpeg`;


        try {
            if (emailexist) {
                res.send({ errors: [{ msg: 'email already exist' }] })
            }
            else {

                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.password, salt);

                const user = await User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    profilePic: profilePic,
                })

                const data = {
                    user: {
                        id: user.id,
                    }
                }

                const authToken = jwt.sign(data, jwt_secret);

                res.json({ authToken: authToken , msg:`Admin Created` })
                console.log('user added to db')
            }

        } catch (error) {
            console.error(errors.massage)
            res.status(500).send('error occured')
        }

    })

module.exports = router