require('express-async-errors');
const jwt = require('jsonwebtoken')
const testEndpoint = (req, res) => {
    res.send("Hello World");
}

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(401).send("Username/Password not provided");
        // throw new Error("Username/Password not provided");

    }
    const token = jwt.sign({})

    res.send({ status: 'success', data: { username, password } });

};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.send({ msg: `Hello Sap`, secret: `Here's ur number ${luckyNumber}` });
}

module.exports = { testEndpoint, login, dashboard }