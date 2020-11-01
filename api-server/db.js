const Sequelize = require('sequelize');
const sequelize = new Sequelize('todoApi', 'postgres', 'datadebaser', {
    host: 'localhost',
    dialect: 'postgres',
});

sequelize.authenticate()
    .then(() => console.log('todoApi is Connected'))
    .catch(err => console.log(err))
module.exports = sequelize;