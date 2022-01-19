const crypto = require('crypto-js');
const { User } = require('../../models');
const dotenv = require('dotenv');
dotenv.config();

const { basicAccessToken } = require('../token/accessToken');
const {
  basicRefreshToken,
  sendRefreshToken,
} = require('../token/refreshToken');

module.exports = {
  post: async (req, res) => {
    const newUserData = req.body;
    const { userId, password } = newUserData;

    if (!User) {
      // database가 없을 때를 대비
      res.status(400).json({ message: 'Invalid User' });
    } else {
      const findUser = await User.findOne({ where: { userId } });
      if (!findUser) {
        res.status(400).json({ message: 'Invalid User' });
      } else {
        // 비밀번호 복호화 시키기
        const secretKey = process.env.SECRET_KEY || 'secretKey';
        const dataBytes = crypto.AES.decrypt(
          findUser.dataValues.password,
          secretKey
        );
        const clientBytes = crypto.AES.decrypt(password, secretKey);

        const dataDecrypted = JSON.parse(dataBytes.toString(crypto.enc.Utf8));
        const clientDecrypted = JSON.parse(
          clientBytes.toString(crypto.enc.Utf8)
        );
        // 비밀번호 복호화 시키기

        const accessToken = basicAccessToken(findUser.dataValues);
        const refreshToken = basicRefreshToken(findUser.dataValues);

        if (dataDecrypted !== clientDecrypted) {
          res.status(400).json({ message: 'Wrong Password' });
        } else {
          sendRefreshToken(res, refreshToken);
          res.status(200).json({
            userInfo: {
              accessToken,
              id: findUser.dataValues.id,
              userId: findUser.dataValues.userId,
            },
            message: 'ok',
          });
        }
      }
    }
  },
};
