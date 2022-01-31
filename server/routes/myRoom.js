const express = require('express');
const router = express.Router();
const { planController } = require('../controller');

router.get('/', planController.myRoom.get);
router.post('/makePlan', planController.makePlan.post);
router.get('/findPlan', planController.findPlan.get);

module.exports = router;
