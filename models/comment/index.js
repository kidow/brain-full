const { Schema, model } = require('mongoose')
const {
  Types: { ObjectId }
} = Schema

const Comment = new Schema({})

module.exports = model('Comment', Comment)
