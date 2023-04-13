var jwt = require('jsonwebtoken');
const jwt_secret = 'darshanShah'

const fetchUser = (req, res, next) => {
    const token = req.header('authToken')
    if (!token) {
        res.status(401)
    }
    else{
        const data = jwt.verify(token, jwt_secret)
        req.userId = data.user.id
        next()
    }
}

module.exports = fetchUser