const express = require('express');
const router = express.Router();
const { testEndpoint } = require('../controllers/main')

router.get('/', testEndpoint)

module.exports = router;