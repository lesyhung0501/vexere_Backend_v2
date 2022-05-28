const {Station} = require('../models');
const {Op} = require('sequelize');


const createStation = async(req, res) => {
    const {name, address, province} = req.body;
    try {
        const newStation = await Station.create({name, address, province});
        res.status(201).send(newStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getAllStation = async(req, res) => {
    const data = req.query;
    const {name} = data;
    
    try {
        if(name) {
            const ListStation = await Station.findAll({
                where: {
                    name: {
                        [Op.like] : `%${name}%`
                    }
                }
            });
            res.status(200).send(ListStation);
        }
        else {
            const ListStation = await Station.findAll();
            res.status(200).send(ListStation);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getDetailStation = async (req, res) => {
    const {id} = req.params;
    try {
        const detailStation = await Station.findOne({
            where: {id: id}
        });
        res.status(200).send(detailStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateStation = async (req, res) => {
    const {id} = req.params;
    const {name, address, province} = req.body;
    try {
        const detailStation = await Station.findOne({where: {id}});
        console.log(detailStation);
        detailStation.name = name;
        detailStation.address = address;
        detailStation.province = province;
        await detailStation.save();
        res.status(200).send(detailStation);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteStation = async (req, res) => {
    const {id} = req.params;
    try {
        await Station.destroy({where: {id}});
        res.status(200).send("delete completed!");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation
}
