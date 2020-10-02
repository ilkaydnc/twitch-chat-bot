require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const url = process.env.DB_URL
const dbName = process.env.DB_NAME
const client = new MongoClient(url, { useUnifiedTopology: true })
client.connect(function (err) {
  console.log('Connected successfully to server')
})
const db = client.db(dbName)

module.exports = db
