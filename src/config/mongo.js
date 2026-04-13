const mongoose = require('mongoose');



async function connectMongoDB(){
    try{
        await mongoose.connect('mongodb://mongodb:27017/mongoDatabase');
        console.log("MongoDB Conectado");
        console.log(mongoose.connection.client.s.url);
    }catch(e){
        console.log(e);
    }
}

module.exports = connectMongoDB;