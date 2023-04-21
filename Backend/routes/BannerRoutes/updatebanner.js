const Banner = require('../../models/Banner')
const express = require('express');
const router = express.Router()
const multer = require('multer')

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

router.post('/updatebanner',
    upload.single('image'),
    async (req, res) => {
        try {
            const info = await Banner.findOne({ _id: req.body.id }).exec()
            const id = req.body.id

            const bannerImg = req.file ? `${req.file.originalname}-${time}-${date}.${req.file.mimetype.split("/")[1]}` : info.bannerImg;

            const banner = await Banner.findByIdAndUpdate(id, {
                topTitle: req.body.topTitle,
                title: req.body.title,
                subTitle: req.body.subTitle,
                bannerImg: bannerImg,
            })

            res.json({msg:`Banner Updated`})

        } catch (error) {
            console.error(error.massage)
            res.status(500).send('error occured')
        }

    })

module.exports = router