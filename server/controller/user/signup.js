const crypto = require('crypto-js');
const { user } = require('../../models');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    const newUserData = req.body;
    const { userId, password } = newUserData;

    const findUserId = await user.findOne({ where: { userId } });

    if (findUserId) {
      res.status(400).json({ message: 'same UserId' });
    } else {
      res.status(200).json({ message: 'ok' });

      await user.create({
        userId,
        password,
      });
    }

    // 비밀번호 복호화 시키기
    // const secretKey = process.env.SECRET_KEY || 'secretKey';

    // const bytes = crypto.AES.decrypt(password, secretKey);
    // const decrypted = JSON.parse(bytes.toString(crypto.enc.Utf8));

    // console.log('비밀번호 복호화', decrypted);

    // res.status(200).json({ message: 'ok' });
  },
};
