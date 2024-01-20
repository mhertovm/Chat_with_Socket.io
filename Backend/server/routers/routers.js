const express = require('express');
const router = express.Router();
const publicControllers = require('../controllers/publicControllers');
// public controller
router.post('/login', publicControllers.login);
router.post('/register', publicControllers.register);
module.exports = router;