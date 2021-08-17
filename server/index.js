const express = require('express')
const cors = require('cors')

const app = (express());

app.use(express.json());
app.use(cors());

const ctrl1 = (require('./controller.js'));

app.get('/api/houses', ctrl1.getHouses);

app.post('/api/houses', ctrl1.createHouse);

app.put('/api/houses/:id', ctrl1.updateHouse);

app.delete('/api/houses/:id', ctrl1.deleteHouse);

app.listen(4004, () => console.log('Up and running on 4004!'));