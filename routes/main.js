const express = require('express');
const router = express.Router();
const { testEndpoint, login, dashboard } = require('../controllers/main');
const authMiddleware = require("../middlewares/auth");

router.get('/', testEndpoint);
router.get('/dashboard', authMiddleware, dashboard);
router.post("/login", login);

module.exports = router;