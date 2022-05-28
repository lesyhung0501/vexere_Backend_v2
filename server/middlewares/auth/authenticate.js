const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('token');
    
    try {
        const decode = jwt.verify(token, 'lesyhung');
        // console.log(decode);
        if(decode) {
            req.user = decode;
            next();
        }
        else {
            res.status(401).send('Ban chua dang nhap');
        }
    } catch (error) {
        res.status(401).send('Token bi sai hoac chưa đăng nhập');
    }
}

module.exports = {
    authenticate,
}