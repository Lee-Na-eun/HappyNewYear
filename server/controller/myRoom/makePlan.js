const { User } = require('../../models');
const { Plan } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');

module.exports = {
  post: async (req, res) => {
    const newPlanData = req.body;
    const { date, planText, workingStatus } = newPlanData;
    const accessVerify = isAuthorized(req);
    await Plan.create({
      date,
      planText,
      workingStatus,
      userId: accessVerify.id,
    });
    res.status(200).json({ message: 'ok' });
  },
};
