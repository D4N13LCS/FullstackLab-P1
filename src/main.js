const express = require('express');
const app = express();
const userView = require('./views/userView');
const postView = require('./views/postView');

app.use(express.json());

app.use("/users/", userView);

app.use("/posts", postView);

app.get('/', (req, res)=>{
    return res.json({'msg': 'Servidor está on'})
})

module.exports = app;