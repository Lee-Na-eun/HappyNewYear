const { User } = require('../../models');
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
    const userData = req.body;

    res.status(200).json({ message: 'ok' });
  },
};
