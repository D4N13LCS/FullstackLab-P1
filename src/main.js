const express = require('express');
const app = express();
const userView = require('./views/userView');

app.use(express.json());

app.use(userView)

app.get('/', (req, res)=>{
    return res.json({'msg': 'Servidor está on'})
})

module.exports = app;