const express = require('express')
const routes = express.Router()

const RevenueController = require('./controllers/RevenueController')

routes.get('/revenues', RevenueController.index)
routes.get('/revenue/:id', RevenueController.show)
routes.post('/revenue', RevenueController.store)
routes.put('/revenue/:id', RevenueController.update)
routes.delete('/revenue/:id', RevenueController.destroy)

module.exports = routes
