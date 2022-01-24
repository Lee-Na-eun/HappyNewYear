const express = require('express');
const router = express.Router();
const { userController } = require('../controller');

router.post('/signup', userController.signup.post);
router.post('/login', userController.login.post);
router.get('/logout', userController.logout.get);
router.get('/myRoom', userController.myRoom.get);
router.get('/myRoom/message/:day', userController.myRoomMessage.get);

module.exports = router;
