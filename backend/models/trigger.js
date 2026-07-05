'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trigger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Team }) {
      // define association here
      this.belongsTo(Team, {
        foreignKey: "teamId",
      });
    }
  }
  Trigger.init({
    taken: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    teamId: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    tableName: "trigger",
    modelName: 'Trigger',
  });
  return Trigger;
};