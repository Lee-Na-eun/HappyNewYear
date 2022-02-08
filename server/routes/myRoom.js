const express = require('express');
const router = express.Router();
const { planController } = require('../controller');

router.get('/', planController.myRoom.get);
router.post('/makePlan', planController.makePlan.post);
router.get('/findPlan', planController.findPlan.get);
router.patch('/findPlan', planController.findPlan.patch);
router.delete('/findPlan', planController.findPlan.delete);

module.exports = router;
