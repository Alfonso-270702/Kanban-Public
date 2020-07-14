const jwt = require('jsonwebtoken')
const secretKey = 'akugtw'

function createToken(payload){
    return jwt.sign(payload,secretKey)
}
function verifyToken(payload){
    return jwt.verify(payload,secretKey)
}

module.exports = { createToken,verifyToken }