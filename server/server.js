require('dotenv').config()
const express = require('express')

require('./models')
const expressGraphQL = require('express-graphql')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const schema = require('./schema/schema')

const app = express()

// Replace with your mongoLab URI
const MONGO_URI =
  'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASSWORD + '@ds263137.mlab.com:63137/lyrical-graphql'
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI')
}

mongoose.Promise = global.Promise
mongoose
  .connect(MONGO_URI, { useMongoClient: true })
  .then(
    () => console.log('Connected to MongoLab instance.'),
    error => console.error('Error connecting to MongoLab:', error)
  )

app.use(bodyParser.json())
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

const webpackMiddleware = require('webpack-dev-middleware')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config.js')
app.use(webpackMiddleware(webpack(webpackConfig)))

module.exports = app
