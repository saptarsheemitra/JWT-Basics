const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { UnauthenticatedError, BadRequest } = require('../errors');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: 'No token provided' });
        //  throw new BadRequest("No token provided");
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decoded;
        req.user = { id, username };
        next();

    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).send({ msg: 'Not authorized' });
    }


}

module.exports = authMiddleware;