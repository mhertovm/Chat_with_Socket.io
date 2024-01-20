'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Contacts, {foreignKey:"requestUser_id"});
      Users.hasMany(models.Contacts, {foreignKey:"responsUser_id"});
      Users.hasMany(models.Chats, {foreignKey:"sendUser_id"});
      Users.hasMany(models.Chats, {foreignKey:"getUser_id"});
    }
  }
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};