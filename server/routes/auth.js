const registerHandler = require('../controllers/auth/register');
const express = require('express');
const loginHandler = require('../controllers/auth/login');

const router = express.Router();

router.post('/register', registerHandler);
router.post('/login', loginHandler);

module.exports = router;