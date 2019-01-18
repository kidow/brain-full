const { Schema, model } = require('mongoose')

const Account = new Schema(
  {
    email: String,
    password: String,
    nickname: String,
    social: {
      facebook: {
        id: String,
        accessToken: String
      },
      google: {
        id: String,
        accessToken: String
      }
    }
  },
  { timestamps: true }
)

module.exports = model('Account', Account)
