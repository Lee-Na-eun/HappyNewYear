'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init(
    {
      toUserId: DataTypes.STRING,
      message: DataTypes.STRING,
      readLetter: DataTypes.BOOLEAN,
      decoration: DataTypes.STRING,
      shape: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Message',
    }
  );
  return Message;
};
