const {database} = require('../keys');
const Sequelize = require("sequelize");

const sequelize = new Sequelize(database.database, database.user, database.password, {
    host: database.host,
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log('DB is connected !!!');
})
.catch(err => {
    console.log('DB is NOT connected ;( ', err);
});

module.exports = sequelize;