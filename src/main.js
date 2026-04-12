const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    return res.json({'msg': 'Servidor está on'})
})

module.exports = app;