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
    const newUserData = req.body;
    const { userId, password } = newUserData;

    res.status(200).json({ message: 'MyRoom Ok' });
  },
};
