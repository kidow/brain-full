const { Schema, model } = require('mongoose')
const {
  Types: { ObjectId }
} = Schema

const Choice = new Schema({})

module.exports = model('Choice', Choice)
