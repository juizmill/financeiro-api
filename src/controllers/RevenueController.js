const mongoose = require('mongoose')
const Revenue = mongoose.model('Revenue')

module.exports = {
  async index(_, res) {
    const revenues = await Revenue.find()
    return res.json(revenues)
  },

  async show(req, res) {
    try {
      const revenue = await Revenue.findById(req.params.id)
      return res.json(revenue)
    } catch (error) {
      return res.status(500).json('Error ID not found')
    }
  },

  async store(req, res) {
    const revenue = await Revenue.create(req.body);
    return res.json(revenue)
  },

  async update(req, res) {
    try {
      const revenue = await Revenue.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      )

      return res.json(revenue)
    } catch (error) {
      return res.status(500).json('Error ID not found')
    }

  },

  async destroy(req, res) {
    try {
      await Revenue.findByIdAndRemove(req.params.id)
      return res.send()
    } catch (error) {
      return res.status(500).json('Error ID not found')
    }
  },

}
