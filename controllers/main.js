require('dotenv').config();
require('express-async-errors');
const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');

const testEndpoint = (req, res) => {
    res.send("Hello World");
}

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(StatusCodes.BAD_REQUEST).send({ msg: "Username/Password not provided" });
        // throw new Error("Username/Password not provided");
    }

    // creating an id using Date... normally we use DB for that
    const id = new Date().getTime();

    //the payload should be small for better experience for user
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.send({ msg: 'User created', token: token });

};

const dashboard = async (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100);
    return res.send({ msg: `Hello ${req.user.username}`, secret: `Here's ur number ${luckyNumber}` });
}

module.exports = { testEndpoint, login, dashboard };