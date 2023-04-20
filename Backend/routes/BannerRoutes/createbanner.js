const Banner = require('../../models/Banner');
const express = require('express');
const router = express.Router()
const { check, validationResult } = require('express-validator');
const multer = require('multer')


const currentDate = new Date()
let date = `${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}`
let time = `${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images/banners')
    },
    filename: (req, file, callback) => {
        console.log({ 'file': file })
        const ext = file.mimetype.split("/")[1];
        callback(null, `${file.originalname}-${time}-${date}.${ext}`);
    }
})

const upload = multer({ storage: storage })

router.post('/createbanner',
    upload.single('image'),
    // [
    //     check('name')
    //         .matches(/^[a-zA-Z ]+$/)
    //         .withMessage('Name can only contain alphabets and spaces')
    //         .isLength({ min: 2 })
    //         .withMessage('Name must be at least 2 characters long'),

    //     check('email', 'Enter a valid email').isEmail(),

    //     check('password', 'Length of password must be at least 8')
    //         .isLength({ min: 8 })
    //         .withMessage('Password must be at least 8 characters long'),
    // ],
    async (req, res) => {

        const bannerImg = req.file ? `${req.file.originalname}-${time}-${date}.${req.file.mimetype.split("/")[1]}` : `OIP.jpeg`;
        console.log(req.body)

        try {
            const banner = await Banner.create({
                topTitle: req.body.topTitle,
                title: req.body.title,
                subTitle: req.body.subTitle,
                bannerImg: bannerImg,
            })
            res.json(banner)
            console.log('Banner added to db')
        }
        catch (error) {
            console.error(error.massage)
            res.status(500).send('error occured')
        }

    })

module.exports = router