'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chats.belongsTo(models.Users, {foreignKey:"sendUser_id"});
      Chats.belongsTo(models.Users, {foreignKey:"getUser_id"});
    }
  }
  Chats.init({
    sendUser_id: DataTypes.INTEGER,
    getUser_id: DataTypes.INTEGER,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chats',
  });
  return Chats;
};