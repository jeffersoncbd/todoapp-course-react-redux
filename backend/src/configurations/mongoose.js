const mongoose = require('mongoose')

const {
  MONGODB_USER: user,
  MONGODB_PASS: pass,
  MONGODB_HOST: host,
  MONGODB_NAME: dbName
} = process.env

mongoose.connect(
  `mongodb+srv://${user}:${pass}@${host}/${dbName}?retryWrites=true`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)
