const express = require('express');
const {stationRouter} = require('./station.routers');
const {userRouter} = require('./user.router');
const {tripRouter} = require('./trip.router');
const {fingerPrintRouter} = require('./test-fingerPrint.router');

const rootRouter = express.Router();

rootRouter.use('/stations', stationRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/trips', tripRouter);
rootRouter.use('/fingerprint', fingerPrintRouter)

module.exports = {
    rootRouter,
}
