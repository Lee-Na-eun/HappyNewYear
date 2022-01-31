const { User } = require('../../models');
const { Plan } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');

module.exports = {
  get: async (req, res) => {
    console.log(req.params);
    // const accessVerify = isAuthorized(req);
    res.status(200).json({ message: 'findPlan is ready' });
  },
};
