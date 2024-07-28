
const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize('ECOMMERCE', 'postgres', 'shainy', {
    host: 'localhost',
    dialect: 'postgres',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, DataTypes);
db.Product = require('./Product')(sequelize, DataTypes);
db.Cart = require('./Cart')(sequelize, DataTypes);

module.exports = db;

