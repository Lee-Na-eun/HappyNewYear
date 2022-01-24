const { Message } = require('../../models');
const dotenv = require('dotenv');
dotenv.config();

const { isAuthorized, basicAccessToken } = require('../token/accessToken');
const {
  refreshAuthorized,
  sendRefreshToken,
} = require('../token/refreshToken');

module.exports = {
  get: async (req, res) => {
    console.log(req.query);

    const findMessage = await Message.findAll({
      where: { toUserId: req.query.user },
    });

    const accessVerify = isAuthorized(req);
    console.log(accessVerify);

    if (!accessVerify) {
      // accessToken 유효기간이 만료됐을 때
      const refreshVerify = refreshAuthorized(req);
      if (!refreshVerify) {
        // refreshToken까지 만료 됐을 때
        res.status(401).json({ message: 'Send new Login Request' });
      }

      res.status(201).json({ message: 'ok', userMessage: { findMessage } });
    } else {
      res.status(200).json({ message: 'ok', userMessage: { findMessage } });
    }
  },
};
