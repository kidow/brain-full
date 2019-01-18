const { Schema, model } = require('mongoose')
const {
  Types: { ObjectId }
} = Schema

const Reply = new Schema({})

module.exports = model('Reply', Reply)
