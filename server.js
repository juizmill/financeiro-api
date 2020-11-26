const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/financeiro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server started!! http://localhost:3000')
})
