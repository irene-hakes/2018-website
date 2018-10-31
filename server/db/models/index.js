const db = require('../db')
const Sequelize = require('sequelize')

// register models
const Comments = require('./comments')

module.exports = { Comments }
