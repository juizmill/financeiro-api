const mongoose = require('mongoose')

const RevenueSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  received: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

mongoose.model('Revenue', RevenueSchema)
