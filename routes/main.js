const express = require('express');
const router = express.Router();
const { testEndpoint, login, dashboard } = require('../controllers/main')

router.get('/', testEndpoint)
router.get('/dashboard', dashboard);
router.post("/login", login)

module.exports = router;