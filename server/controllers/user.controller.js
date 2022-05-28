const {User, sequelize} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const gravatarUrl = require('gravatar-url');

const register = async(req, res) => {
    const {name, email, password, numberphone} = req.body;
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        console.log(hashPassword);
        const urlAvatarDefault = gravatarUrl(email);
        const newUser = await User.create({name, email, password: hashPassword, numberphone, avatar: urlAvatarDefault});
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

const login = async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({
        where: {
            email,
        }
    });
    if(user) {

        const isAuth = bcrypt.compareSync(password, user.password);
        if(isAuth) {
            const token = jwt.sign({
                email: user.email, 
                type: user.type
              }, 'lesyhung', { expiresIn: 60 * 60 });
            res.status(200).send({
                success: 'Login Success',
                token
            });
        }
        else {
            res.status(500).send('Password không đúng')
        }
    }
    else {
        res.status(404).send('Not found account!');
    }
}

const uploadAvatar = async(req, res) => {
    // console.log('Day la log request ', req);
    const {user} = req;
    const {file} = req;
    // console.log(file);
    // res.send(file);
    try {
        const userFound = await User.findOne({
            where: {
                email: user.email,
            }
        })
        console.log(userFound);
        if(userFound) {
            const urlImage = `http://localhost:3000/${file.path}`;
            userFound.avatar = urlImage;
            await userFound.save();                
            res.status(201).send(userFound);
        }
        else {
            res.status(500).send(`khong tim thay user co email nhu tren`);
        }

    } catch (error) {
        res.status(500).send(error);
    }


    // const {user} = req;
    // const file = req.file;

    // try {
    //     const userFound = await User.findOne({
    //         where: {
    //             email: user.email,
    //         }
    //     })
    //     console.log(userFound);
    //     if(userFound) {
    //         const urlImage = `http://localhost:3000/${file.path}`;
    //         userFound.avatar = urlImage;
    //         await userFound.save();                
    //         res.status(201).send(userFound);
    //     }
    //     else {
    //         res.status(500).send(`khong tim thay user co email nhu tren`);
    //     }

    // } catch (error) {
    //     res.status(500).send(error);
    // }
}

const getAllTrip = async (req, res) => {
    try {       
        const [results] = await sequelize.query(`select us.id as user_id, us.name as user_name, stationForFrom.name as fromStaion, stationForTo.name as toStation, trips.price, trips.startTime from users as us
        inner join tickets as t on us.id = t.user_id
        inner join trips on t.trip_id = trips.id
        inner join stations as stationForFrom on stationForFrom.id = trips.fromStation
        inner join stations as stationForTo on stationForTo.id = trips.toStation;`);
        res.status(200).send(results);
    } catch (error) {
       res.status(500).send(error); 
    }
}

const getOneTripDetail = async (req, res) => {
    const {from, to, startTime} = req.body;
    const start = `${startTime.slice(6)}-${startTime.slice(3,5)}-${startTime.slice(0,2)}`;
    console.log(start);
    // console.log(`stationForFrom.name = ${from};`);
    try {
        const [results] = await sequelize.query(`select us.id as user_id, us.name as user_name, stationForFrom.name as fromStaion, stationForTo.name as toStation, trips.price, trips.startTime from users as us
        inner join tickets as t on us.id = t.user_id
        inner join trips on t.trip_id = trips.id
        inner join stations as stationForFrom on stationForFrom.id = trips.fromStation
        inner join stations as stationForTo on stationForTo.id = trips.toStation
        where stationForFrom.name = "${from}" and stationForTo.name = "${to}" and startTime like "${start}%";`);
        res.status(200).send(results);
    } catch (error) {
        res.status(500).send(error); 
    }
}



module.exports = {
    register,
    login,
    uploadAvatar,
    getAllTrip,
    getOneTripDetail
}