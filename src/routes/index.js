const express = require('express');

const paiseseController = require('../controllers/paises/index');
const routes = express.Router();

routes.get('/paises', paiseseController.paises);

module.exports = routes;
