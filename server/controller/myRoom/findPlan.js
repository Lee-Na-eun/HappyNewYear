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
    const { day, userId } = req.query;

    const findAllPlan = await Plan.findAll({ where: { userId } });
    const allPlanClear = findAllPlan.map((el) => el.dataValues);
    // plan 전체 보기

    if (!accessVerify) {
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        res.status(401).json({ message: 'Send new Login Request' });
      }
      if (day === 'all') {
        res.status(201).json({ message: 'ok', data: allPlanClear });
      } else if (day === 'month') {
        const { month } = req.query;
        const findMonthPlan = await Plan.findAll({ where: { userId, month } });
        const monthPlanClear = findMonthPlan.map((el) => el.dataValues);
        // plna 한 달 보기
        res.status(201).json({ message: 'ok', data: monthPlanClear });
      } else if (day === 'date') {
        const { date } = req.query;

        const findDayPlan = await Plan.findAll({
          where: { userId, month, date },
        });
        const datePlanClear = findDayPlan.map((el) => el.dataValues);
        // plan 하루 보기
        res.status(201).json({ message: 'ok', data: datePlanClear });
      }
    } else {
      if (day === 'all') {
        res.status(200).json({ message: 'ok', data: allPlanClear });
      } else if (day === 'month') {
        const { month } = req.query;
        const findMonthPlan = await Plan.findAll({ where: { userId, month } });
        const monthPlanClear = findMonthPlan.map((el) => el.dataValues);
        // plna 한 달 보기
        res.status(200).json({ message: 'ok', data: monthPlanClear });
      } else if (day === 'date') {
        const { date } = req.query;

        const findDayPlan = await Plan.findAll({
          where: { userId, month, date },
        });
        const datePlanClear = findDayPlan.map((el) => el.dataValues);
        // plan 하루 보기
        res.status(200).json({ message: 'ok', data: datePlanClear });
      }
    }
  },
};
