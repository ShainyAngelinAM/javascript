
const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize('express', 'postgres', 'shainy', {
    host: 'localhost',
    dialect: 'postgres',
});

const User = require('./user')(db, DataTypes);

db.User = User;

module.exports = db;
