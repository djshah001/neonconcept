const User = require('../models/User')
const express = require('express');
const router = express.Router()
const { check, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const multer  = require('multer')
const { v4: uuidv4 } = require("uuid");

const jwt_secret = 'darshanShah'

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'./images/profilePic')
    },
    filename:(req,file,callback) =>{
        console.log({'file':file})
        const ext = file.mimetype.split("/")[1];
        callback(null, `${file.originalname.slice(0,8)}.${ext}`);
    }
})

const upload = multer({storage:storage})

router.post('/createuser',
upload.single('image'),
[
    check('name','Enter a valid name').isLength({ min: 2 }),
    check('email','Enter a valid email').isEmail(),
    check('password','length of password must be at least 8').isLength({ min: 8 }),
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors)
        return res.status(400).json({ errors: errors.array() });
    }
    const emailexist = await User.findOne({email:req.body.email}).exec()

    try {
        if(emailexist){
            res.send('email already exist')
        }
        else{
    
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(req.body.password, salt);

            const user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                profilePic: `${req.file.originalname.slice(0,8)}.${req.file.mimetype.split("/")[1]}` ,
              })

            const data = {
                user:{
                    id: user.id,
                }
            }  

            const authToken = jwt.sign(data, jwt_secret);
              
            res.json({authToken:authToken})
            console.log('user added to db')
        }
        
    } catch (error) {
        console.error(errors.massage)
        res.status(500).send('error occured')
    }

})

module.exports = router