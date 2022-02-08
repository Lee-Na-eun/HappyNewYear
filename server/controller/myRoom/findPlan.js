const { User } = require('../../models');
const { Plan } = require('../../models');
const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const {
  refreshAuthorized,
  sendRefreshToken,
} = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const { userId } = req.query;

    const findAllPlan = await Plan.findAll({ where: { userId } });
    const allPlanClear = findAllPlan.map((el) => el.dataValues);
    // plan 전체 보기

    if (!findAllPlan) {
      res.status(200).json({ data: [] });
    } else {
      if (!accessVerify) {
        const refreshVerify = refreshAuthorized(req);
        console.log('refresh', refreshVerify);

        if (!refreshVerify) {
          res.status(401).json({ message: 'Send new Login Request' });
        }
        res.status(201).json({ message: 'ok', data: allPlanClear });
      } else {
        res.status(200).json({ message: 'ok', data: allPlanClear });
      }
    }
  },

  patch: async (req, res) => {
    const accessVerify = isAuthorized(req);
    const data = req.body;
    const { id, month, date, planText, workingStatus } = data;

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      await Plan.update(
        { month, date, planText, workingStatus },
        { where: { userId: refreshVerify.id } }
      );
      res.status(201).json({ message: 'ok' });
    }

    await Plan.update(
      { month, date, planText, workingStatus },
      { where: { id: id, userId: accessVerify.id } }
    );
    res.status(200).json({ message: 'ok' });
  },

  delete: async (req, res) => {
    const accessVerify = isAuthorized(req);

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      await Plan.destroy({
        where: { id: req.query.planId },
        force: true,
      });
      res.status(201).json({ message: 'ok' });
    }

    await Plan.destroy({
      where: { id: req.query.planId },
      force: true,
    });
    res.status(200).json({ message: 'ok' });
  },
};
