const { body, validationResult } = require('express-validator');
const User = require('../models/User')
const express = require('express');
const router = express.Router()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const jwt_secret = 'darshanShah'

router.post('/login',[
    // body('name','Enter a valid name').isLength({ min: 2 }),
    body('email','Enter a valid email').isEmail(),
    body('password','invalid password').isLength({ min: 8 }),
],
async (req,res) => {
    
    // const User = {
    //     email: req.body.email,
    //     password: req.body.password,
    // }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ success:false,errors: errors.array()});
    }


    const email = req.body.email
    const password = req.body.password
    console.log(email, password)

    const userCred = await User.findOne({email:email}).exec()
    

    try {
        if(userCred){
            const matchPassword = await bcrypt.compareSync(password,userCred.password)
            if(matchPassword){
                // res.send(userCred)
                const data = {
                    user:{
                        id: userCred.id,
                    }
                }  
    
                const authToken = jwt.sign(data, jwt_secret);
                  
                res.json({success:true,authToken:authToken})
            }
            else{
                res.json({success:false})
            }
        }
        else{
            res.send({success:false})
        }
        
    } catch (error) {
        res.status(500).send('error occured')
        // console.log(error)
    }

})

module.exports = router