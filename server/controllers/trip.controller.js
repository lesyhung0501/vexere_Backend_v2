const {Trip, Station} = require('../models');


const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body;
    try {
        const newTrip = await Trip.create({fromStation, toStation, startTime, price});
        res.status(201).json(newTrip);
    } catch (error) {
        res.status(500).send(error);
    } 
}


const getAllTrip = async (req, res) => {
    try {
        const listAllTrip = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as : 'from',
                },
                {
                    model: Station,
                    as : 'to',
                },
            
            ]
            
        });
        res.status(200).send(listAllTrip);
    } catch (error) {
        res.status(500).send(error);
    }
}


const updateTrip = async (req, res) => {
    const {id} = req.params;
    const {fromStation, toStation, startTime, price} = req.body;
    
    try {
        await Trip.update({ fromStation, toStation, startTime, price }, {
            where: {
              id
            }
        });
        res.status(200).send(`Update success Trip have id = ${id}`);
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteTrip = async (req, res) => {
    const {id} = req.params;
    try {
        await Trip.destroy({
            where: {id}
        })
        res.status(200).send(`Delete success ${id}`);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    createTrip,
    getAllTrip,
    updateTrip,
    deleteTrip
}