const express = require('express');

const fingerPrintRouter = express.Router();
const {fingerPrint} = require('../controllers/fingerPrint.controller');

fingerPrintRouter.get('/', fingerPrint)

module.exports = {
    fingerPrintRouter
}