'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contacts.belongsTo(models.Users, {foreignKey:"requestUser_id"});
      Contacts.belongsTo(models.Users, {foreignKey:"responsUser_id"});
    }
  }
  Contacts.init({
    requestUser_id: DataTypes.INTEGER,
    requestUser: DataTypes.BOOLEAN,
    responsUser_id: DataTypes.INTEGER,
    responsUser: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Contacts',
  });
  return Contacts;
};