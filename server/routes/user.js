const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.post('/signup', userController.signup.post);
router.post('/login', userController.login.post);
router.get('/logout', userController.logout.get);

module.exports = router;
