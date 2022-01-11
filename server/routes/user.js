const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.post('/signup', userController.signup.post);

module.exports = router;
