const express = require('express');
const {createStation, getAllStation, getDetailStation, updateStation, deleteStation} = require('../controllers/station.controllers');
const {checkExist} = require('../middlewares/validations/checkExist');
const {authenticate} = require('../middlewares/auth/authenticate');
const {authorize} = require('../middlewares/auth/authorize');
const {Station} = require('../models');

const stationRouter = express.Router();


stationRouter.post('/', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), createStation);
stationRouter.get('/', getAllStation);
stationRouter.get('/:id', getDetailStation);
stationRouter.put('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), checkExist(Station), updateStation);
stationRouter.delete('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), checkExist(Station), deleteStation);



module.exports = {
    stationRouter,
}
