var jwt = require('jsonwebtoken');
const jwt_secret = 'darshanShah'

const fetchUser = (req, res, next) => {
    try {
        const token = req.header('authToken')
        if (!token) {
            res.status(401)
        }
        else{
            const data = jwt.verify(token, jwt_secret)
            req.userId = data.user.id
            next()
        }
    } catch (error) {
        // console.log(error)
        res.send('error')
    }
    
}

module.exports = fetchUser