const express = require('express');
const {register, login, uploadAvatar, getAllTrip, getOneTripDetail} = require('../controllers/user.controller');
const {authenticate} = require('../middlewares/auth/authenticate');
const {uploadImage} = require('../middlewares/uploads/upload_avatar');
const {authorize} = require('../middlewares/auth/authorize');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/upload-avatar', authenticate, uploadImage('avatar'), uploadAvatar);
userRouter.get('/getAllTrip', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), getAllTrip);
userRouter.get('/getOneTripDetail', getOneTripDetail);

module.exports = {
    userRouter,
}
