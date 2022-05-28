const express = require('express');
const path = require('path');
const {sequelize} = require('./models');
const {rootRouter} = require('./routers');
const Fingerprint = require('express-fingerprint');
const port = 3000;


const app = express();

app.use(Fingerprint());

app.use(express.json());


const directory = path.join(__dirname, './public');
app.use('/public', express.static(directory));


app.use('/api/v1', rootRouter);



app.listen(port, async() => {
    console.log(`Example app listening on port ${port}`);
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})