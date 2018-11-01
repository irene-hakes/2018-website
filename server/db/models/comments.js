const db = require('../db');
const Sequelize = require('sequelize');

const Comments = db.define('comments', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
})

module.exports = Comments
