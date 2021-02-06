const { Sequelize, DataTypes, Model} = require('sequelize');
const sequelize = require('../db/index');
class Word extends Model {}

Word.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: DataTypes.STRING,
    meaning_es: DataTypes.STRING,
    status: {type: DataTypes.BOOLEAN, defaultValue:  true}
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'words',
});

module.exports = Word;
